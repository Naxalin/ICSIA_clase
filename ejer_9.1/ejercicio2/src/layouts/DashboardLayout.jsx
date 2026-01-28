import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import tareasData from "../data/tasks"; 

function DashboardLayout() {
  const [tareas, setTareas] = useState(tareasData);

  return (
    <div>
      <nav>
        <NavLink to="/dashboard">Ver Tareas</NavLink>
        <NavLink to="/dashboard/new">Añadir Tarea</NavLink>
      </nav>

      <Outlet context={{ tareas, setTareas }} />
    </div>
  );
}

export default DashboardLayout;
