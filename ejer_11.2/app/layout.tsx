import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog de Recetas',
  description: 'Descubre y comparte recetas de cocina',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="inner">
            <Link href="/" className="logo">
              Sabor<span>&</span>Arte
            </Link>
            <nav>
              <Link href="/recetas/nueva">+ Nueva Receta</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
