import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

export type Receta = {
  id: number;
  titulo: string;
  descripcion_corta: string;
  ingredientes: string;
  instrucciones: string;
  tiempo_coccion: number;
  fecha_creacion: string;
};

export type Comentario = {
  id: number;
  receta_id: number;
  autor: string;
  texto: string;
  fecha_creacion: string;
};

export async function getRecetas(): Promise<Receta[]> {
  const [rows] = await pool.query('SELECT * FROM recetas ORDER BY fecha_creacion DESC');
  return rows as Receta[];
}

export async function getRecetaById(id: number): Promise<Receta | null> {
  const [rows] = await pool.query('SELECT * FROM recetas WHERE id = ?', [id]);
  const recetas = rows as Receta[];
  return recetas[0] || null;
}

export async function getComentariosByRecetaId(recetaId: number): Promise<Comentario[]> {
  const [rows] = await pool.query(
    'SELECT * FROM comentarios WHERE receta_id = ? ORDER BY fecha_creacion ASC',
    [recetaId]
  );
  return rows as Comentario[];
}
