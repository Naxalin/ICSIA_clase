import React from "react";
import Card from "../ProjectCard";

function ProjectColumnPendiente({ proyectos = [] ,onChangeEstado}) {


    const filtrados = proyectos.filter(p => p.estado === "Pendiente");
  
    return <Card title="Pendiente" proyectos={filtrados} onChangeEstado={onChangeEstado} />;
  
}

export default ProjectColumnPendiente;
