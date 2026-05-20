import './globals.css';

export const metadata = {
  title: 'Gestor de Imágenes',
  description: 'Gestión de imágenes con detección de contenido por IA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>📷 Gestor de Imágenes</h1>
          <p>Sube imágenes y descubre su contenido con IA</p>
        </header>
        {children}
      </body>
    </html>
  );
}
