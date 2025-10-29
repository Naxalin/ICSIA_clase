import { useState } from "react";

function Filtro({ DatosT, filtrado, valores }) {
  const [opcion, setOpcion] = useState("todas");

  const cambio = (event) => {
    const valor = event.target.value;
    valores = valor;
    setOpcion(valor);

    if (filtrado && typeof filtrado === "function") { 
      if (valor === "todas") {
        filtrado(DatosT);
      } else {
        const filtradas = DatosT.filter((tarea) => tarea.prioridad === valor);
        console.log(filtradas)
        filtrado(filtradas);
      }
    } else {
      console.error("La prop 'filtrado' no es una función");
    }
  };

  return (
    <div>
      <select name="prioridad" id="prioridad" onChange={cambio} value={opcion}>
        <option value="todas">Todas</option>
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>                
      </select>
    </div>
  );
}

export default Filtro;
