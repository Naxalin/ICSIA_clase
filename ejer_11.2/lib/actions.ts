'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import pool from '@/lib/db';

export async function crearReceta(prevState: unknown, formData: FormData) {
  const titulo = formData.get('titulo')?.toString().trim();
  const descripcion_corta = formData.get('descripcion_corta')?.toString().trim();
  const ingredientes = formData.get('ingredientes')?.toString().trim();
  const instrucciones = formData.get('instrucciones')?.toString().trim();
  const tiempo_coccion = formData.get('tiempo_coccion')?.toString().trim();

  if (!titulo || !descripcion_corta || !ingredientes || !instrucciones || !tiempo_coccion) {
    return { error: 'Todos los campos son obligatorios.' };
  }

  const tiempoNum = parseInt(tiempo_coccion, 10);
  if (isNaN(tiempoNum) || tiempoNum <= 0) {
    return { error: 'El tiempo de cocción debe ser un número positivo.' };
  }

  let insertId: number;

  try {
    const [result] = await pool.query(
      'INSERT INTO recetas (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion) VALUES (?, ?, ?, ?, ?)',
      [titulo, descripcion_corta, ingredientes, instrucciones, tiempoNum]
    );
    insertId = (result as { insertId: number }).insertId;
  } catch {
    return { error: 'Error al guardar la receta. Inténtalo de nuevo.' };
  }

  revalidatePath('/');
  redirect(`/recetas/${insertId}`);
}

export async function actualizarReceta(id: number, prevState: unknown, formData: FormData) {
  const titulo = formData.get('titulo')?.toString().trim();
  const descripcion_corta = formData.get('descripcion_corta')?.toString().trim();
  const ingredientes = formData.get('ingredientes')?.toString().trim();
  const instrucciones = formData.get('instrucciones')?.toString().trim();
  const tiempo_coccion = formData.get('tiempo_coccion')?.toString().trim();

  if (!titulo || !descripcion_corta || !ingredientes || !instrucciones || !tiempo_coccion) {
    return { error: 'Todos los campos son obligatorios.' };
  }

  const tiempoNum = parseInt(tiempo_coccion, 10);
  if (isNaN(tiempoNum) || tiempoNum <= 0) {
    return { error: 'El tiempo de cocción debe ser un número positivo.' };
  }

  try {
    await pool.query(
      'UPDATE recetas SET titulo=?, descripcion_corta=?, ingredientes=?, instrucciones=?, tiempo_coccion=? WHERE id=?',
      [titulo, descripcion_corta, ingredientes, instrucciones, tiempoNum, id]
    );
  } catch {
    return { error: 'Error al actualizar la receta. Inténtalo de nuevo.' };
  }

  revalidatePath(`/recetas/${id}`);
  revalidatePath('/');
  redirect(`/recetas/${id}`);
}

export async function borrarReceta(formData: FormData) {
  const id = formData.get('id')?.toString();
  if (!id) return;

  await pool.query('DELETE FROM recetas WHERE id = ?', [parseInt(id, 10)]);
  revalidatePath('/');
  redirect('/');
}

export async function crearComentario(prevState: unknown, formData: FormData): Promise<{ error?: string; success?: boolean }> {
  const receta_id = formData.get('receta_id')?.toString();
  const autor = formData.get('autor')?.toString().trim();
  const texto = formData.get('texto')?.toString().trim();

  if (!receta_id || !autor || !texto) {
    return { error: 'Autor y comentario son obligatorios.' };
  }

  try {
    await pool.query(
      'INSERT INTO comentarios (receta_id, autor, texto) VALUES (?, ?, ?)',
      [parseInt(receta_id, 10), autor, texto]
    );
    revalidatePath(`/recetas/${receta_id}`);
    return { success: true };
  } catch {
    return { error: 'Error al guardar el comentario.' };
  }
}
