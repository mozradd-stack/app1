# FormFriend

Eine KI-App, die Menschen mit Migrationshintergrund hilft, deutsche Formulare zu verstehen und korrekt auszufüllen.

## Features

- **Multi-language support**: Deutsch, English, Arabic, Turkish, Ukrainian, French, Farsi
- **Step-by-step form wizard**: Guides users through each field with explanations
- **Glossary**: Explains German bureaucratic terms in simple language
- **Document checklist**: Shows required documents for each form
- **Submission guide**: Explains where and how to submit forms
- **RTL support**: Full right-to-left support for Arabic and Farsi

## Available Forms

- Antrag auf Buergergeld (Citizen's Benefit Application)
- Antrag auf Kindergeld (Child Benefit Application)
- Anmeldung einer Wohnung (Residence Registration)

## Setup

```bash
# Install dependencies
npm install
cd client && npm install && cd ..

# Development
npm run dev

# Production build
cd client && npm run build && cd ..
npm start
```

## Tech Stack

- **Frontend**: React 18
- **Backend**: Express.js / Node.js
- **Data**: Structured form templates with 7-language translations

## API Endpoints

- `GET /api/forms?lang=en` - List all form templates
- `GET /api/forms/:id?lang=en` - Get form with fields
- `GET /api/glossary?lang=en` - Get glossary terms
- `GET /api/languages` - Get available languages
- `GET /api/translations/:lang` - Get UI translations
- `POST /api/forms/:id/submit` - Validate and submit form
- `POST /api/documents/upload` - Upload a document
