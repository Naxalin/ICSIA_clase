'use client';

import { borrarReceta } from '@/lib/actions';

export default function BorrarRecetaBtn({ id }: { id: number }) {
  return (
    <form action={borrarReceta}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="btn btn-danger"
        onClick={(e) => {
          if (!confirm('¿Seguro que quieres borrar esta receta?')) e.preventDefault();
        }}
      >
        Borrar Receta
      </button>
    </form>
  );
}