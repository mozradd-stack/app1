const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const formTemplates = require('./data/formTemplates');
const glossary = require('./data/glossary');
const translations = require('./data/translations');

const app = express();
const PORT = process.env.PORT || 3001;

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

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

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

// Catch-all for production SPA
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`FormFriend server running on port ${PORT}`);
});

module.exports = app;
