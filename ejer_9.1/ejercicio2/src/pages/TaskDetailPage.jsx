import { useParams, useNavigate, useOutletContext } from "react-router-dom";

function TaskDetailPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tareas, setTareas } = useOutletContext();

  const tarea = tareas.find(t => t.id === Number(taskId));
  if (!tarea) {
    return <p>Tarea no encontrada</p>;
  }

  const handleDelete = () => {
    setTareas(tareas.filter(t => t.id !== tarea.id));
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h2>{tarea.title}</h2>
      <p>{tarea.description}</p>
      <p>{tarea.status}</p>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
}

export default TaskDetailPage;
