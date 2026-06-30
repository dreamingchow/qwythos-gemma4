# Gemma 4 Website AI Instructions

## What is this?
This is a simple multilingual website (English, Chinese, Japanese) introducing the Gemma 4 open weights model family released by Google.

## Repository Structure
```
/Users/dreaming/projects/qwythos-gemma4/
├── index.html                    # Main entry point (Vue SPA)
├── package.json                  # Project dependencies
├── vite.config.js               # Vite build configuration
├── js/
│   ├── components/              # Vue components (AppBar, Footer, Hero, etc.)
│   ├── pages/                   # Page entries (HomePage, AboutPage, etc.)
│   ├── views/                   # View components
│   ├── img/                    # Image placeholders
│   ├── icons/                  # Icon definitions
│   ├── i18n/                   # Translation JSON
│   ├── mock/                   # Mock data for models
│   ├── router/                 # Vue Router setup
│   └── main.js                 # App bootstrap
├── CLAUDE.md                   # This file
└── README.md                  # Project readme
```

## Building & Running
```bash
cd /Users/dreaming/projects/qwythos-gemma4
npm install          # Install Vue 3, Vue Router
npm run dev          # Start dev server on http://localhost:5173
```

## Tech Stack
- **Vue 3** - Composition API, component-based UI
- **Vite** - Fast dev server + build tool
- **Vue Router** - SPA routing with multiple page transitions
- **ES Modules** - Pure JS with no build tools beyond Vite

## Design Notes
- Clean, modern aesthetic with subtle teal/cyan accents
- Responsive hero section with floating elements
- Language switcher with dropdown menu (EN/中文/日本語)
- Spec cards for each model with badges (active/upcoming/finalizing/archived)
