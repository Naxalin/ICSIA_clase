import { useState } from "react";
import { Link } from "react-router-dom";

function ColumnLeft({ paises = [] }) {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("asc");

  const filtrados = paises
    .filter((p) => p.name.common.toLowerCase().includes(busqueda.toLowerCase()))
    .sort((a, b) => {
      return orden === "asc" 
        ? a.name.common.localeCompare(b.name.common) 
        : b.name.common.localeCompare(a.name.common);
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Países del Mundo</h2>
      <p style={{ fontSize: "12px", color: "#666" }}>Datos cargados desde 'restcountries.com'</p>
      
      <input 
        type="search" 
        placeholder="Escribe para buscar..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0", boxSizing: "border-box" }}
      />
      
      <select 
        value={orden} 
        onChange={(e) => setOrden(e.target.value)} 
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      >
        <option value="asc">Nombre (A-Z)</option>
        <option value="desc">Nombre (Z-A)</option>
      </select>

      <div style={{ marginTop: "10px" }}>
        {filtrados.map((p) => (
          <Link 
            key={p.cca3} 
            to={`/country/${p.name.common}`} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px", 
              padding: "10px", 
              textDecoration: "none", 
              color: "#333",
              borderBottom: "1px solid #eee" 
            }}
          >
            <img src={p.flags.png} width="25" alt="" />
            <span>{p.name.common}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ColumnLeft;