const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const https = require('https');
const http = require('http');
const formTemplates = require('./data/formTemplates');
const glossary = require('./data/glossary');
const translations = require('./data/translations');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Trading Terminal API Proxy ───────────────────────────────────────────────
function proxyGet(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, { headers: { 'User-Agent': 'TradingTerminal/1.0', 'Accept': 'application/json' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('JSON parse error')); }
      });
    }).on('error', reject);
  });
}

// Simple in-memory cache
const cache = new Map();
function cached(key, ttlMs, fn) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.ts < ttlMs) return Promise.resolve(entry.data);
  return fn().then(data => { cache.set(key, { data, ts: Date.now() }); return data; });
}

// CoinGecko proxy
app.get('/api/coingecko/*', async (req, res) => {
  try {
    const path = req.path.replace('/api/coingecko', '');
    const query = Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : '';
    const url = `https://api.coingecko.com/api/v3${path}${query}`;
    const cacheKey = url;
    const data = await cached(cacheKey, 30000, () => proxyGet(url));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Fear & Greed Index proxy
app.get('/api/fng', async (req, res) => {
  try {
    const data = await cached('fng', 3600000, () => proxyGet('https://api.alternative.me/fng/?limit=10'));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Crypto news proxy (using CryptoPanic public API)
app.get('/api/news', async (req, res) => {
  try {
    const data = await cached('news', 300000, () =>
      proxyGet('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=latest')
    );
    const articles = (data.Data || []).slice(0, 20).map(item => ({
      title: item.title,
      url: item.url,
      source: item.source_info?.name || item.source,
      published: item.published_on,
      imageUrl: item.imageurl,
      body: item.body?.substring(0, 200),
    }));
    res.json({ articles });
  } catch (e) {
    res.status(500).json({ error: e.message, articles: [] });
  }
});

// Binance proxy (optional fallback for CORS issues)
app.get('/api/binance/*', async (req, res) => {
  try {
    const binancePath = req.path.replace('/api/binance', '');
    const query = Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : '';
    const url = `https://api.binance.com/api/v3${binancePath}${query}`;
    const data = await proxyGet(url);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
// ─────────────────────────────────────────────────────────────────────────────

app.use(cors());
app.use(express.json());

// File upload config
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
    cb(null, allowed.includes(file.mimetype));
  }
});

// Serve static files when build exists
const buildPath = path.join(__dirname, '../client/build');
const fs = require('fs');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
}

// Serve FormFriend standalone PWA files from root
const rootPath = path.join(__dirname, '..');
app.use('/FormFriend.html', express.static(path.join(rootPath, 'FormFriend.html')));
app.use('/manifest.json', express.static(path.join(rootPath, 'manifest.json')));
app.use('/icon.svg', express.static(path.join(rootPath, 'icon.svg')));
app.use('/sw.js', express.static(path.join(rootPath, 'sw.js')));

// GET available form templates
app.get('/api/forms', (req, res) => {
  const lang = req.query.lang || 'de';
  const forms = formTemplates.map(f => ({
    id: f.id,
    name: f.name[lang] || f.name.de,
    category: f.category,
    description: f.description[lang] || f.description.de,
    requiredDocuments: (f.requiredDocuments[lang] || f.requiredDocuments.de)
  }));
  res.json(forms);
});

// GET single form template with fields
app.get('/api/forms/:id', (req, res) => {
  const lang = req.query.lang || 'de';
  const form = formTemplates.find(f => f.id === req.params.id);
  if (!form) return res.status(404).json({ error: 'Form not found' });

  const translated = {
    id: form.id,
    name: form.name[lang] || form.name.de,
    category: form.category,
    description: form.description[lang] || form.description.de,
    requiredDocuments: form.requiredDocuments[lang] || form.requiredDocuments.de,
    submissionInfo: form.submissionInfo[lang] || form.submissionInfo.de,
    fields: form.fields.map(field => ({
      id: field.id,
      label: field.label[lang] || field.label.de,
      explanation: field.explanation[lang] || field.explanation.de,
      type: field.type,
      required: field.required,
      options: field.options
        ? field.options.map(o => ({
            value: o.value,
            label: o.label[lang] || o.label.de
          }))
        : undefined
    }))
  };
  res.json(translated);
});

// GET glossary
app.get('/api/glossary', (req, res) => {
  const lang = req.query.lang || 'de';
  const result = glossary.map(term => ({
    term: term.term,
    explanation: term.explanation[lang] || term.explanation.de
  }));
  res.json(result);
});

// GET available languages
app.get('/api/languages', (req, res) => {
  res.json(translations.languages);
});

// GET UI translations
app.get('/api/translations/:lang', (req, res) => {
  const lang = req.params.lang;
  const t = translations.ui[lang] || translations.ui.de;
  res.json(t);
});

// POST form submission - validate and generate filled form data
app.post('/api/forms/:id/submit', (req, res) => {
  const form = formTemplates.find(f => f.id === req.params.id);
  if (!form) return res.status(404).json({ error: 'Form not found' });

  const { answers } = req.body;
  const errors = [];

  for (const field of form.fields) {
    if (field.required && (!answers[field.id] || answers[field.id].trim() === '')) {
      errors.push({
        fieldId: field.id,
        message: `Field "${field.label.de}" is required`
      });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const submissionId = uuidv4();
  res.json({
    submissionId,
    status: 'success',
    message: 'Form filled successfully. Ready for download.',
    formData: {
      formName: form.name.de,
      answers,
      submittedAt: new Date().toISOString()
    }
  });
});

// POST document upload
app.post('/api/documents/upload', upload.single('document'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or invalid file type' });
  }
  res.json({
    id: uuidv4(),
    filename: req.file.originalname,
    size: req.file.size,
    status: 'uploaded'
  });
});

// Catch-all for SPA
if (fs.existsSync(buildPath)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`FormFriend server running on port ${PORT}`);
});

// HTTPS server for PWA on iPhone (self-signed cert)
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;
const sslKeyPath = path.join(__dirname, '../ssl/key.pem');
const sslCertPath = path.join(__dirname, '../ssl/cert.pem');
if (fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)) {
  const https = require('https');
  const sslOptions = {
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath)
  };
  https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
    console.log(`FormFriend HTTPS server running on port ${HTTPS_PORT}`);
    console.log(`iPhone: https://192.0.2.2:${HTTPS_PORT}/FormFriend.html`);
  });
}

module.exports = app;
