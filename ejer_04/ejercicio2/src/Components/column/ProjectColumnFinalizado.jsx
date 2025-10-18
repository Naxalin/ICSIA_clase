import React from "react";
import Card from "../ProjectCard";

function ProjectColumnFinalizado({ proyectos = [], onChangeEstado }) {
     const filtrados = proyectos.filter(p => p.estado === "Completado");
  
    return <Card title="Completado" proyectos={filtrados} onChangeEstado={onChangeEstado} />;
  
}

export default ProjectColumnFinalizado;
