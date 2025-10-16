import React from "react";
import CabeceraFicha from "./CabeceraFicha";
import ImagenProducto from "./ImagenProducto";
import DetallesProducto from "./DetallesProducto";
import PieFicha from "./PieFicha";

function FichaProducto({ producto, children }) {
  const { nombre, vendedor, imagenes, caracteristicas, precio, enStock } = producto;

  return (
    <div className="ficha-producto">
      <CabeceraFicha nombre={nombre} vendedor={vendedor} />
      {imagenes.length > 0 && <ImagenProducto url={imagenes[0]} alt={nombre} />}
      <DetallesProducto caracteristicas={caracteristicas}>
        {children}
      </DetallesProducto>
      <PieFicha precio={precio} enStock={enStock} />
    </div>
  );
}

export default FichaProducto;
