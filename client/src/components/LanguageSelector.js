import React from 'react';

function LanguageSelector({ languages, current, onChange }) {
  return (
    <div className="language-selector">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn ${current === lang.code ? 'active' : ''}`}
          onClick={() => onChange(lang.code)}
          title={lang.name}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
