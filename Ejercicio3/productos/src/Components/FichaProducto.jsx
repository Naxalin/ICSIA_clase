import React from "react";
import ImagenProducto from "./ImagenProducto";

function FichaProducto({ producto, children }) {
  const { nombre, descripcion, precio, imagenURL } = producto;

  return (
    <div className="ficha-producto">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>${precio.toFixed(2)}</strong>
      <br />
      <ImagenProducto url={imagenURL} nombre={nombre} />
      <br />

      {/* Aquí se muestran los children */}
      {children}
    </div>
  );
}

export default FichaProducto;
