import React from 'react';

function Glossary({ terms, ui, onBack }) {
  return (
    <div>
      <button className="back-btn" onClick={onBack}>
        &larr; {ui.home}
      </button>
      <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>{ui.glossary}</h2>
      <div className="glossary-list">
        {terms.map((term, i) => (
          <div key={i} className="glossary-card">
            <h3>{term.term}</h3>
            <p>{term.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
