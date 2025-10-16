import React from "react";

function DetallesProducto({ caracteristicas, children }) {
  return (
    <div>
      <ul>
        {caracteristicas.map((carac, index) => (
          <li key={index}>{carac}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default DetallesProducto;
