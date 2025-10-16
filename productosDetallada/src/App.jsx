import React from "react";
import GaleriaProductos from "./Components/GaleriaProductos";
import { productos } from "./Components/datos/productos";
import "./App.css";

function App() {
  return <GaleriaProductos productos={productos} />;
}

export default App;
