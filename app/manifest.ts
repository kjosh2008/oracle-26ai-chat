import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oracle 26ai RAG Chat',
    short_name: 'Oracle AI',
    description: 'AI-powered chat with Oracle 26ai vector search',
    start_url: '/',
    display: 'standalone',
    background_color: '#eff6ff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
