import React from "react";

function ImagenProducto({ url, nombre }) {
  return (
    <img
      src={url}
      alt={nombre}
      style={{ width: "200px", borderRadius: "8px" }}
    />
  );
}

export default ImagenProducto;