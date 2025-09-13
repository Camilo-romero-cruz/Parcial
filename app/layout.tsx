import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parcial Next.js',
  description: 'Proyecto simple con Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
