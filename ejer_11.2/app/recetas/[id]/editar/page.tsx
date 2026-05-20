import { notFound } from 'next/navigation';
import { getRecetaById } from '@/lib/db';
import EditarRecetaForm from './EditarRecetaForm';

export default async function EditarRecetaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recetaId = parseInt(id, 10);

  if (isNaN(recetaId)) notFound();

  const receta = await getRecetaById(recetaId);
  if (!receta) notFound();

  return <EditarRecetaForm receta={receta} />;
}
