import { Link } from "react-router-dom";
import { eliminarTarea } from "../utils/api";
import { completarTarea } from "../utils/api";



export function TaskList( { tareas, projectId } ) {
  console.log(tareas);
 return (
    <div>
      <h1>Detalles del Proyecto</h1>
      <Link to={`/proyectos/${projectId}/nueva-tarea`}> Añadir Tarea</Link>
      <ul>{tareas.map((tarea) => <li key={tarea.id}>{tarea.titulo} 
        <button onClick={() => completarTarea({ tareaID: tarea.id })}>Completar</button>
        <button onClick={() => eliminarTarea({ tareaId: tarea.id })}>Borrar</button></li>)}</ul>
    </div>
  );
}


    