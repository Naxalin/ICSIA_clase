import { memo } from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";

function TaskItem({ task }) {
  const { currentUser } = useAuth();
  const { dispatch } = useTasks();

  const isOwner = task.author === currentUser;
  const isGuest = currentUser === "Invitado";
  const disabled = !isOwner || isGuest;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white mb-2 rounded">
      <div>
        <span
          className={task.completed ? "text-decoration-line-through text-secondary" : ""}
        >
          {task.text}
        </span>
        <span className="ms-2 text-warning">(autor: {task.author})</span>
      </div>

      <div className="d-flex gap-2">
        <button
          className={"btn btn-sm " + (task.completed ? "btn-primary" : "btn-success")}
          disabled={disabled}
          onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
        >
          {task.completed ? "Deshacer" : "Completar"}
        </button>

        <button
          className="btn btn-sm btn-danger"
          disabled={disabled}
          onClick={() => dispatch({ type: "DELETE", payload: task.id })}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default memo(TaskItem);
