import React from "react";

function FichaProducto({ producto }) {
  const { nombre, descripcion, precio } = producto;

  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>${precio.toFixed(2)}</strong>
    </div>
  );
}

export default FichaProducto;
