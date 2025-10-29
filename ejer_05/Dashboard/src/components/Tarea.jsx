function Tarea({ datos, toggleCompletada }) {
  return (
    <div
      className={`p-2 mb-2 rounded ${
        datos.completada ? "bg-light text-muted text-decoration-line-through" : "bg-white"
      }`}
      onClick={() => toggleCompletada(datos.id)}
      style={{ cursor: "pointer" }}
    >
      <h3>{datos.texto}</h3>
      <p>{datos.completada ? "Completada" : "Pendiente"}</p>
      <p>Prioridad: {datos.prioridad}</p>
    </div>
    
  );
}

export default Tarea;
