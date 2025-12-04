import { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TasksContext);
  const { currentUser } = useContext(AuthContext);

  const handleAdd = () => {
    if (text.trim() === "" || currentUser === "Invitado") return;

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
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={handleAdd} disabled={currentUser === "Invitado"}>
        Añadir
      </button>
    </div>
  );
}
