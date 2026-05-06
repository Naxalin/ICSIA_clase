import { Link } from "react-router-dom";
export function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> inicio </Link>
          <Link to="/proyectos"> Proyectos </Link>
          <Link to="/proyectos/nuevo"> Nuevo Proyecto </Link>
        </li>
      </ul>
    </nav>
  );
}