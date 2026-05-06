import { Link } from "react-router-dom";

export function ProjectList( { proyectos } ) {
  return (
      <>
      
      <ul>
        {proyectos.map((proyecto) => {
          console.log(proyecto);
          return (
             <li key={proyecto.id}>
              <Link to={`/proyectos/${proyecto.id}`}>{proyecto.nombre}</Link>
            </li>
          );
        })}
      </ul>
      </>

  );
}