import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Interactive Linear Algebra',
  description: 'Learn linear algebra through interactive examples and exercises',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}