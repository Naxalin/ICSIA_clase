import React from "react";

function Card({title, proyectos = [],onChangeEstado }) {


  const proyectosEnProgreso = proyectos;

  

  return (
    <div className="bg-gray-400 p-4">
      <h2>{title}</h2>
      {proyectosEnProgreso.map(proyecto => (
        <div key={proyecto.id} className="border p-2 mb-2">
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.descripcion}</p>

          <h4>Responsables:</h4>
          <div>
            {proyecto.responsables.map(r => (
              <span key={r.id}>{r.nombre} </span>
            ))}
          </div>

            <select
            value={proyecto.estado}
            onChange={(e) => onChangeEstado(proyecto.id, e.target.value)}
            className="mt-2 p-1 border rounded"
          >
            
            <option value="">Cambiar a</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Completado">Finalizado</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Card;
