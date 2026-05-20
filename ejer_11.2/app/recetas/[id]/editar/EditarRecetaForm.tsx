'use client';

import { useActionState } from 'react';
import { actualizarReceta } from '@/lib/actions';
import type { Receta } from '@/lib/db';

export default function EditarRecetaForm({ receta }: { receta: Receta }) {
  const actualizarConId = actualizarReceta.bind(null, receta.id);
  const [state, formAction, isPending] = useActionState(actualizarConId, null);

  return (
    <div className="container" style={{ maxWidth: 680, paddingTop: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <a href={`/recetas/${receta.id}`} style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          ← Volver a la receta
        </a>
        <h1 style={{ marginTop: '0.75rem', fontSize: '2rem' }}>Editar Receta</h1>
        <p style={{ color: 'var(--gray-mid)', marginTop: '0.4rem', fontStyle: 'italic' }}>
          {receta.titulo}
        </p>
      </div>

      <div className="form-card">
        {state?.error && <div className="error-msg">⚠️ {state.error}</div>}

        <form action={formAction}>
          <div className="form-group">
            <label htmlFor="titulo">Título *</label>
            <input id="titulo" name="titulo" type="text" defaultValue={receta.titulo} required />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion_corta">Descripción corta *</label>
            <textarea id="descripcion_corta" name="descripcion_corta" rows={3} defaultValue={receta.descripcion_corta} required />
          </div>

          <div className="form-group">
            <label htmlFor="tiempo_coccion">Tiempo de cocción (minutos) *</label>
            <input id="tiempo_coccion" name="tiempo_coccion" type="number" min={1} defaultValue={receta.tiempo_coccion} required />
          </div>

          <div className="form-group">
            <label htmlFor="ingredientes">Ingredientes *</label>
            <textarea id="ingredientes" name="ingredientes" rows={6} defaultValue={receta.ingredientes} required />
          </div>

          <div className="form-group">
            <label htmlFor="instrucciones">Instrucciones *</label>
            <textarea id="instrucciones" name="instrucciones" rows={8} defaultValue={receta.instrucciones} required />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button type="submit" className="btn btn-primary" disabled={isPending}>
              {isPending ? 'Guardando...' : '✓ Guardar cambios'}
            </button>
            <a href={`/recetas/${receta.id}`} className="btn btn-outline">Cancelar</a>
          </div>
        </form>
      </div>
    </div>
  );
}
