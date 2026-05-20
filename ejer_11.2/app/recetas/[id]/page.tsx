import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRecetaById, getComentariosByRecetaId } from '@/lib/db';
import ComentarioForm from './ComentarioForm';
import BorrarRecetaBtn from './BorrarRecetaBtn';

export default async function RecetaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recetaId = parseInt(id, 10);

  if (isNaN(recetaId)) notFound();

  const [receta, comentarios] = await Promise.all([
    getRecetaById(recetaId),
    getComentariosByRecetaId(recetaId),
  ]);

  if (!receta) notFound();

  return (
    <div className="container">
      <div className="detail-header">
        <div style={{ marginBottom: '0.75rem' }}>
          <Link href="/" style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            &larr; Volver al listado
          </Link>
        </div>
        <h1>{receta.titulo}</h1>
        <div className="recipe-meta" style={{ marginTop: '0.75rem' }}>
          <span>{receta.tiempo_coccion} minutos</span>
          <span className="dot">·</span>
          <span>{new Date(receta.fecha_creacion).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="dot">·</span>
          <span>{comentarios.length} comentario{comentarios.length !== 1 ? 's' : ''}</span>
        </div>
        <p style={{ color: 'var(--gray-mid)', fontSize: '1.05rem', lineHeight: '1.6', fontStyle: 'italic', marginTop: '1rem' }}>
          {receta.descripcion_corta}
        </p>
        <div className="detail-actions">
          <Link href={`/recetas/${receta.id}/editar`} className="btn btn-outline">
            Editar Receta
          </Link>
          <BorrarRecetaBtn id={receta.id} />
        </div>
      </div>

      <div>
        <h2 className="section-title">Ingredientes</h2>
        <div className="content-block">{receta.ingredientes}</div>
      </div>

      <div>
        <h2 className="section-title">Instrucciones</h2>
        <div className="content-block">{receta.instrucciones}</div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h2 className="section-title">Comentarios ({comentarios.length})</h2>
        <div className="form-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '2rem' }}>
          {comentarios.length === 0 ? (
            <p style={{ padding: '1.5rem', color: 'var(--gray-mid)', fontStyle: 'italic' }}>
              Todavía no hay comentarios. ¡Sé el primero en comentar!
            </p>
          ) : (
            comentarios.map((c) => (
              <div key={c.id} className="comment">
                <div className="comment-author">{c.autor}</div>
                <div className="comment-date">
                  {new Date(c.fecha_creacion).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="comment-text">{c.texto}</div>
              </div>
            ))
          )}
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>Añadir un comentario</h3>
        <div className="form-card">
          <ComentarioForm recetaId={receta.id} />
        </div>
      </div>
    </div>
  );
}
