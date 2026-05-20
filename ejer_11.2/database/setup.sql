CREATE DATABASE IF NOT EXISTS recetas_db;
USE recetas_db;

CREATE TABLE recetas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion_corta TEXT NOT NULL,
  ingredientes TEXT NOT NULL,
  instrucciones TEXT NOT NULL,
  tiempo_coccion INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  receta_id INT NOT NULL,
  autor VARCHAR(100) NOT NULL,
  texto TEXT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE
);