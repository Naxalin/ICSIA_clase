-- =====================================================
-- Blog de Recetas - Script de Base de Datos MySQL
-- Ejecutar en tu instancia AWS RDS
-- =====================================================

-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS recipe_blog
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE recipe_blog;

-- Tabla de recetas
CREATE TABLE IF NOT EXISTS recetas (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  titulo           VARCHAR(255) NOT NULL,
  descripcion_corta TEXT NOT NULL,
  ingredientes     TEXT NOT NULL,
  instrucciones    TEXT NOT NULL,
  tiempo_coccion   INT NOT NULL COMMENT 'Tiempo en minutos',
  fecha_creacion   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de comentarios
CREATE TABLE IF NOT EXISTS comentarios (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  receta_id      INT NOT NULL,
  autor          VARCHAR(100) NOT NULL,
  texto          TEXT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================
-- Datos de ejemplo (opcional)
-- =====================================================

INSERT INTO recetas (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion) VALUES
(
  'Tortilla Española Tradicional',
  'La clásica tortilla de patatas con cebolla caramelizada, esponjosa por dentro y dorada por fuera.',
  '- 4 huevos grandes\n- 3 patatas medianas\n- 1 cebolla mediana\n- Aceite de oliva virgen extra\n- Sal al gusto',
  '1. Pelar y cortar las patatas en rodajas finas.\n2. Cortar la cebolla en juliana.\n3. Calentar abundante aceite y pochar las patatas y la cebolla a fuego medio durante 20 min.\n4. Batir los huevos con sal, añadir las patatas escurridas.\n5. En una sartén antiadherente con un poco de aceite, cuajar la tortilla 3 min por cada lado.',
  35
),
(
  'Gazpacho Andaluz',
  'Sopa fría de tomate perfecta para el verano. Refrescante, saludable y llena de sabor mediterráneo.',
  '- 1 kg de tomates maduros\n- 1 pepino\n- 1 pimiento verde\n- 1 diente de ajo\n- 50 ml de aceite de oliva\n- 2 cucharadas de vinagre de Jerez\n- Pan del día anterior (opcional)\n- Sal',
  '1. Lavar y trocear todas las verduras.\n2. Triturar en la batidora hasta obtener una crema homogénea.\n3. Añadir el aceite en hilo mientras se bate.\n4. Colar por un chino para una textura más fina.\n5. Salpimentar y enfriar en nevera al menos 2 horas antes de servir.',
  15
);

INSERT INTO comentarios (receta_id, autor, texto) VALUES
(1, 'María García', '¡Increíble receta! La hice ayer y quedó perfecta. El truco de pochar lentamente la cebolla hace toda la diferencia.'),
(1, 'Carlos López', 'Muy buena. Yo añado un poco de chorizo picado y queda espectacular.'),
(2, 'Ana Martínez', 'El gazpacho más rico que he probado. Lo hago cada semana en verano. ¡Gracias!');
