import React from "react";
import Card from "../ProjectCard";

function EnProgreso({ proyectos, onChangeEstado }) {
  const filtrados = proyectos.filter(p => p.estado === "En Progreso");

  return <Card title="En Progreso" proyectos={filtrados} onChangeEstado={onChangeEstado} />;
}

export default EnProgreso;
