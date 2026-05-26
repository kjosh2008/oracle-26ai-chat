# Oracle 26ai Chat

Modern React/Next.js web interface for Oracle 26ai RAG Chat. Real-time semantic search with source attribution.

## Features

- **Real-time Chat** — Ask questions, get instant RAG-powered answers
- **Source Attribution** — See which documents answered your question
- **Responsive Design** — Works on desktop, tablet, mobile
- **Zero Latency** — Instant feedback while typing
- **Auto-scaling** — Deployed on Cloud Run with auto-scaling

## Quick Start

### Local Development

```bash
git clone https://github.com/kjosh2008/oracle-26ai-chat.git
cd oracle-26ai-chat

# Install dependencies
npm install

# Configure .env
cp .env.example .env
# Update API_URL to point to your backend

# Run dev server
npm run dev
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

## Deployment

### Cloud Run
```bash
gcloud run deploy oracle-frontend \
  --source . \
  --region northamerica-northeast1 \
  --allow-unauthenticated
```

### Docker
```bash
docker build -t oracle-frontend .
docker run -p 3000:3000 oracle-frontend
```

## Configuration

Environment variables:
- `NEXT_PUBLIC_API_URL` — Backend API endpoint

## Tech Stack

- **Framework** — Next.js 16 with TypeScript
- **Styling** — Tailwind CSS
- **UI Components** — React 19
- **HTTP Client** — Fetch API
- **Deployment** — Google Cloud Run

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Keyboard Shortcuts

- `Enter` — Send message
- `Shift+Enter` — New line
- `Ctrl/Cmd+K` — Focus search (future)

## Status

- ✅ Production ready
- ✅ Auto-scaling enabled
- ✅ CI/CD pipeline active

## License

MIT

## Support

Issues? Check the Wiki or open a GitHub issue.
