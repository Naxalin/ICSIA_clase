import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { currentUser } = useAuth();
  const { dispatch } = useTasks();

  function handleAdd() {
    if (!text.trim() || currentUser === "Invitado") return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text,
        author: currentUser,
        completed: false
      }
    });

    setText("");
  }

  return (
    <div className="input-group my-4">
      <input
        className="form-control"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={currentUser === "Invitado"}
      />
      <button className="btn btn-secondary" disabled={currentUser === "Invitado"} onClick={handleAdd}>
        Añadir
      </button>
    </div>
  );
}
