import { useState } from 'react';
import Tareas from './Tarea.jsx';
import Filtro from './Filtros.jsx'
import Datos from './datos/datos.js';
import ResumenTareas from './ResumenTareas.jsx';

function ListaTareas() {

  const [tareas, setTareas] = useState(Datos);

  const cambiar = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };
      const mostrar = (nuevaTarea) => {
        setTareas(nuevaTarea)
    };
  return (
    <div>

        <Filtro DatosT={Datos} filtrado={mostrar}/>

      {tareas.map((dato) => (
        <Tareas key={dato.id} datos={dato} toggleCompletada={cambiar} />
      ))}

        <ResumenTareas DatosT={tareas}  />
    </div>


  );
}

export default ListaTareas;
