import React, { useState, useEffect, useCallback } from 'react';
import LanguageSelector from './components/LanguageSelector';
import FormList from './components/FormList';
import FormWizard from './components/FormWizard';
import Glossary from './components/Glossary';
import './App.css';

const API_BASE = '/api';

function App() {
  const [lang, setLang] = useState('de');
  const [languages, setLanguages] = useState([]);
  const [ui, setUi] = useState(null);
  const [view, setView] = useState('home'); // home, forms, wizard, glossary
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [glossary, setGlossary] = useState([]);
  const [dir, setDir] = useState('ltr');

  const fetchUi = useCallback(async (language) => {
    const res = await fetch(`${API_BASE}/translations/${language}`);
    const data = await res.json();
    setUi(data);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/languages`)
      .then(r => r.json())
      .then(setLanguages);
    fetchUi(lang);
  }, [lang, fetchUi]);

  useEffect(() => {
    const langInfo = languages.find(l => l.code === lang);
    setDir(langInfo?.dir || 'ltr');
  }, [lang, languages]);

  const loadForms = async () => {
    const res = await fetch(`${API_BASE}/forms?lang=${lang}`);
    const data = await res.json();
    setForms(data);
    setView('forms');
  };

  const selectForm = async (formId) => {
    const res = await fetch(`${API_BASE}/forms/${formId}?lang=${lang}`);
    const data = await res.json();
    setSelectedForm(data);
    setView('wizard');
  };

  const loadGlossary = async () => {
    const res = await fetch(`${API_BASE}/glossary?lang=${lang}`);
    const data = await res.json();
    setGlossary(data);
    setView('glossary');
  };

  if (!ui) return <div className="loading">Loading...</div>;

  return (
    <div className="app" dir={dir}>
      <header className="app-header">
        <h1 onClick={() => setView('home')} className="app-title">
          {ui.appName}
        </h1>
        <LanguageSelector
          languages={languages}
          current={lang}
          onChange={setLang}
        />
      </header>

      <main className="app-main">
        {view === 'home' && (
          <div className="home">
            <div className="hero">
              <h2>{ui.tagline}</h2>
              <p className="hero-description">
                {lang === 'de' && 'Wir helfen Ihnen, deutsche Behördenformulare einfach und richtig auszufüllen. Schritt für Schritt, in Ihrer Sprache.'}
                {lang === 'en' && 'We help you fill out German official forms easily and correctly. Step by step, in your language.'}
                {lang === 'ar' && 'نساعدك في ملء النماذج الرسمية الألمانية بسهولة وبشكل صحيح. خطوة بخطوة، بلغتك.'}
                {lang === 'tr' && 'Alman resmi formlarını kolay ve doğru bir şekilde doldurmanıza yardımcı oluyoruz. Adım adım, kendi dilinizde.'}
                {lang === 'uk' && 'Ми допоможемо вам легко та правильно заповнити німецькі офіційні форми. Крок за кроком, вашою мовою.'}
                {lang === 'fr' && 'Nous vous aidons à remplir facilement et correctement les formulaires officiels allemands. Étape par étape, dans votre langue.'}
                {lang === 'fa' && 'ما به شما کمک می‌کنیم فرم‌های رسمی آلمانی را به آسانی و به درستی پر کنید. مرحله به مرحله، به زبان خودتان.'}
              </p>
            </div>

            <div className="home-actions">
              <button className="btn btn-primary btn-large" onClick={loadForms}>
                {ui.selectForm}
              </button>
              <button className="btn btn-secondary btn-large" onClick={loadGlossary}>
                {ui.glossary}
              </button>
            </div>

            <div className="features">
              <div className="feature-card">
                <div className="feature-icon">1</div>
                <h3>{lang === 'de' ? 'Formular wählen' : lang === 'en' ? 'Choose form' : lang === 'ar' ? 'اختر النموذج' : lang === 'tr' ? 'Form seçin' : lang === 'uk' ? 'Оберіть форму' : lang === 'fr' ? 'Choisir le formulaire' : 'فرم را انتخاب کنید'}</h3>
              </div>
              <div className="feature-card">
                <div className="feature-icon">2</div>
                <h3>{lang === 'de' ? 'Fragen beantworten' : lang === 'en' ? 'Answer questions' : lang === 'ar' ? 'أجب على الأسئلة' : lang === 'tr' ? 'Soruları cevaplayın' : lang === 'uk' ? 'Дайте відповіді' : lang === 'fr' ? 'Répondre aux questions' : 'به سؤالات پاسخ دهید'}</h3>
              </div>
              <div className="feature-card">
                <div className="feature-icon">3</div>
                <h3>{lang === 'de' ? 'Formular herunterladen' : lang === 'en' ? 'Download form' : lang === 'ar' ? 'حمّل النموذج' : lang === 'tr' ? 'Formu indirin' : lang === 'uk' ? 'Завантажте форму' : lang === 'fr' ? 'Télécharger' : 'فرم را دانلود کنید'}</h3>
              </div>
            </div>
          </div>
        )}

        {view === 'forms' && (
          <FormList
            forms={forms}
            ui={ui}
            onSelect={selectForm}
            onBack={() => setView('home')}
          />
        )}

        {view === 'wizard' && selectedForm && (
          <FormWizard
            form={selectedForm}
            ui={ui}
            lang={lang}
            onBack={() => setView('forms')}
          />
        )}

        {view === 'glossary' && (
          <Glossary
            terms={glossary}
            ui={ui}
            onBack={() => setView('home')}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>FormFriend &copy; 2026 - {lang === 'de' ? 'Datenschutz ist uns wichtig. Ihre Daten werden nicht gespeichert.' : lang === 'en' ? 'Privacy matters. Your data is not stored.' : lang === 'ar' ? 'خصوصيتك مهمة. بياناتك لا تُخزَّن.' : lang === 'tr' ? 'Gizliliğiniz önemlidir. Verileriniz saklanmaz.' : lang === 'uk' ? 'Конфіденційність важлива. Ваші дані не зберігаються.' : lang === 'fr' ? 'Votre vie privée compte. Vos données ne sont pas stockées.' : 'حریم خصوصی مهم است. داده‌های شما ذخیره نمی‌شوند.'}</p>
      </footer>
    </div>
  );
}

export default App;
