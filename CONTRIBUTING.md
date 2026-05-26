# Contributing to Oracle 26ai Chat

Thank you for your interest in contributing!

## Setup

```bash
git clone git@github.com:kjosh2008/oracle-26ai-chat.git
cd oracle-26ai-chat
npm install
cp .env.example .env
npm run dev
```

## Development

- Use TypeScript for all files
- Follow ESLint rules
- Format with Prettier before submitting
- Keep lines under 100 characters

## Before Submitting PR

```bash
npm run format
npm run lint
npm run type-check
npm run build
```

## File Structure
app/
├── components/
├── context/
├── lib/
├── page.tsx
└── layout.tsx

## Committing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit with clear messages
3. Push and open PR

## Questions?

Check the [Wiki](https://github.com/kjosh2008/oracle-26ai-chat/wiki) or open an issue.
