import Link from 'next/link';
import { getRecetas } from '@/lib/db';

export default async function HomePage() {
  const recetas = await getRecetas();

  return (
    <div className="container">
      <div className="page-hero">
        <div>
          <h1>Todas las Recetas</h1>
          <p>{recetas.length} receta{recetas.length !== 1 ? 's' : ''} disponible{recetas.length !== 1 ? 's' : ''}</p>
        </div>
        <Link href="/recetas/nueva" className="btn btn-primary">
          + Crear Nueva Receta
        </Link>
      </div>

      {recetas.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gray-mid)' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Todavía no hay recetas. ¡Sé el primero en añadir una!
          </p>
          <Link href="/recetas/nueva" className="btn btn-primary">Crear primera receta</Link>
        </div>
      ) : (
        <div className="recipes-grid">
          {recetas.map((receta) => (
            <Link href={`/recetas/${receta.id}`} key={receta.id} style={{ display: 'block' }}>
              <div className="recipe-card">
                <div className="recipe-meta">
                  <span>🕐 {receta.tiempo_coccion} min</span>
                  <span className="dot">·</span>
                  <span>{new Date(receta.fecha_creacion).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h2>{receta.titulo}</h2>
                <p>{receta.descripcion_corta}</p>
                <span className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                  Ver receta →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
