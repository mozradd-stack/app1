import React from 'react';

function FormList({ forms, ui, onSelect, onBack }) {
  const categories = {};
  forms.forEach(form => {
    if (!categories[form.category]) categories[form.category] = [];
    categories[form.category].push(form);
  });

  return (
    <div>
      <button className="back-btn" onClick={onBack}>
        &larr; {ui.home}
      </button>
      <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>{ui.selectForm}</h2>
      <div className="form-list">
        {forms.map(form => (
          <div
            key={form.id}
            className="form-card"
            onClick={() => onSelect(form.id)}
          >
            <span className="form-category">
              {ui.categories?.[form.category] || form.category}
            </span>
            <h3>{form.name}</h3>
            <p>{form.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormList;
