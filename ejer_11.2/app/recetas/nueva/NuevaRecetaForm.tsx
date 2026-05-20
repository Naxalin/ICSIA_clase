'use client';

import { useActionState } from 'react';
import { crearReceta } from '@/lib/actions';

const initialState = { error: '' };

export default function NuevaRecetaForm() {
  const [state, formAction, isPending] = useActionState(crearReceta, initialState);

  return (
    <div className="container" style={{ maxWidth: 680, paddingTop: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <a href="/" style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          ← Volver al listado
        </a>
        <h1 style={{ marginTop: '0.75rem', fontSize: '2rem' }}>Nueva Receta</h1>
        <p style={{ color: 'var(--gray-mid)', marginTop: '0.4rem' }}>
          Comparte tu receta con la comunidad
        </p>
      </div>

      <div className="form-card">
        {state?.error && <div className="error-msg">⚠️ {state.error}</div>}

        <form action={formAction}>
          <div className="form-group">
            <label htmlFor="titulo">Título de la receta *</label>
            <input id="titulo" name="titulo" type="text" placeholder="Ej: Tortilla española tradicional" required />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion_corta">Descripción corta *</label>
            <textarea id="descripcion_corta" name="descripcion_corta" rows={3}
              placeholder="Una breve descripción que despierte el apetito..." required />
          </div>

          <div className="form-group">
            <label htmlFor="tiempo_coccion">Tiempo de cocción (minutos) *</label>
            <input id="tiempo_coccion" name="tiempo_coccion" type="number" min={1} placeholder="Ej: 30" required />
          </div>

          <div className="form-group">
            <label htmlFor="ingredientes">Ingredientes *</label>
            <textarea id="ingredientes" name="ingredientes" rows={6}
              placeholder="Lista los ingredientes, uno por línea:&#10;- 4 huevos&#10;- 3 patatas medianas&#10;- 1 cebolla..." required />
          </div>

          <div className="form-group">
            <label htmlFor="instrucciones">Instrucciones *</label>
            <textarea id="instrucciones" name="instrucciones" rows={8}
              placeholder="Describe los pasos detalladamente:&#10;1. Pelar y cortar las patatas...&#10;2. Calentar aceite en una sartén..." required />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button type="submit" className="btn btn-primary" disabled={isPending}>
              {isPending ? 'Guardando...' : '✓ Crear Receta'}
            </button>
            <a href="/" className="btn btn-outline">Cancelar</a>
          </div>
        </form>
      </div>
    </div>
  );
}
