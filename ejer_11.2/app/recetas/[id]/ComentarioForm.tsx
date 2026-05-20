'use client';

import { useActionState } from 'react';
import { crearComentario } from '@/lib/actions';

const initialState: { error?: string; success?: boolean } = {};

export default function ComentarioForm({ recetaId }: { recetaId: number }) {
  const [state, formAction, isPending] = useActionState(crearComentario, initialState);

  return (
    <div style={{ marginTop: '1.5rem' }}>
      {state?.error && <div className="error-msg">⚠️ {state.error}</div>}
      {state?.success && (
        <div style={{ background: '#eafaf1', color: '#27ae60', border: '1px solid #a9dfbf', borderRadius: 4, padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
          ✓ Comentario publicado
        </div>
      )}
      <form action={formAction}>
        <input type="hidden" name="receta_id" value={recetaId} />
        <div className="form-group">
          <label htmlFor="autor">Tu nombre *</label>
          <input id="autor" name="autor" type="text" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="texto">Comentario *</label>
          <textarea id="texto" name="texto" rows={4} placeholder="Escribe tu comentario..." required />
        </div>
        <button type="submit" className="btn btn-sage" disabled={isPending}>
          {isPending ? 'Publicando...' : '💬 Publicar comentario'}
        </button>
      </form>
    </div>
  );
}
