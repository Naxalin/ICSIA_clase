import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function NewTaskPage() {
  const { tareas, setTareas } = useOutletContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
      title,
      description,
      status,
    };
    setTareas([...tareas, newTask]);
    setTitle("");
    setDescription("");
    setStatus("pending");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>

      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Estado:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pendiente</option>
          <option value="completed">Completada</option>
        </select>
      </div>

      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default NewTaskPage;
