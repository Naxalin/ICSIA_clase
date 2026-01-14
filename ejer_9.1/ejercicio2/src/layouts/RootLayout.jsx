import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/dashboard">Panel de Tareas</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
} export default RootLayout;
