import React from "react";
import { productos } from "./Components/datos/productos";
import FichaProducto from "./Components/FichaProducto";
import "./App.css";  // Importamos el CSS

function App() {
  return (
    <div className="lista-productos">
      {productos.map((p) => (
        <FichaProducto key={p.id} producto={p}>
          <button onClick={() => alert(`${p.nombre} añadido al carrito`)}>
            Añadir al carrito
          </button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default App;
