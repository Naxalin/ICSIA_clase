import React from 'react';
import FichaProducto from './Components/FichaProducto'; // Nombre con mayúscula
// import './App.css'

function App() {
  // Ejemplo de producto para pasar como prop
  const producto = {
    id: 1,
    nombre: 'Teclado Mecánico',
    descripcion: 'Teclado con switches Cherry MX Red.',
    precio: 125.50,
    imagenURL: 'https://lipsum.app/random/200x200'
  };

  return (
    <>
      <FichaProducto producto={producto} />
    </>
  );
}

export default App;
