# Contributing to Oracle 26ai Chat

## Setup

```bash
git clone git@github.com:kjosh2008/oracle-26ai-chat.git
cd oracle-26ai-chat
npm install
cp .env.example .env
npm run dev
# Visit http://localhost:3000
```

## Development Guidelines

### Code Style
- Use TypeScript for all files
- Follow ESLint rules
- Format with Prettier: `npm run format`
- Line length: 100 characters

### Before Submitting PR

```bash
# Format code
npm run format

# Lint
npm run lint

# Test (if applicable)
npm run test
```

## File Structure
app/
├── components/          # React components
├── context/             # React context
├── lib/                 # Utility functions
├── page.tsx             # Home page
└── layout.tsx           # Root layout
public/                  # Static assets

## Component Guidelines

- Use functional components with hooks
- Add JSDoc comments for public APIs
- Keep components focused and testable
- Use TypeScript interfaces

## Submitting Changes

1. Fork repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Format and lint: `npm run format && npm run lint`
5. Commit: `git commit -am 'Add feature description'`
6. Push: `git push origin feature/your-feature`
7. Submit PR with clear description

## Questions?

- Check [Wiki](https://github.com/kjosh2008/oracle-26ai-chat/wiki)
- Open a discussion in Issues
