import Perfil from './Components/UserList';
import { perfiles } from './datos/perfiles';
import Card from './Components/profileCard';
import { useState } from 'react';
import './App.css'; 

function App() {
  const [idSeleccionada, setIdSeleccionada] = useState(null);

  return (
    <div className="app-container">
      <div className="perfil-container">
        <Perfil perfiles={perfiles} onSeleccionar={setIdSeleccionada} />
      </div>
      <div className="card-container">
        <Card datos={perfiles} id={idSeleccionada} />
      </div>
    </div>
  );
}

export default App;
