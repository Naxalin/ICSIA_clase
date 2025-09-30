import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#28a745" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Naturaleza Viva</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="proyectosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </a>
              <ul className="dropdown-menu" aria-labelledby="proyectosDropdown">
                <li><a className="dropdown-item" href="#">Proyecto 1</a></li>
                <li><a className="dropdown-item" href="#">Proyecto 2</a></li>
                <li><a className="dropdown-item" href="#">Proyecto 3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
