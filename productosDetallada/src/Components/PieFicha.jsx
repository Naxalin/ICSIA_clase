import React from "react";

function PieFicha({ precio, enStock }) {
  return (
    <div>
      {enStock ? (
        <p>
          Precio: {precio.moneda} {precio.valor.toFixed(2)}{" "}
          {precio.enOferta && <span>¡OFERTA!</span>}
        </p>
      ) : (
        <p>No disponible ❌</p>
      )}
    </div>
  );
}

export default PieFicha;
