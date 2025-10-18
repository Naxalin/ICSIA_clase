import React from "react";
import FichaProducto from "./FichaProducto";

function GaleriaProductos({ productos }) {
  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        <FichaProducto key={producto.id} producto={producto}>
          <button onClick={() => alert(`${producto.nombre} seleccionado`)}>
            Más información
          </button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default GaleriaProductos;
