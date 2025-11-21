import { useState } from "react";
import PostComments from "./Components/PostComments.jsx";

export default function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejercicio 4: Comentarios de un Post</h1>

      <label>
        ID del Post:
        <input
          type="number"
          min="1"
          max="100"
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </label>

      <PostComments postId={postId} />
    </div>
  );
}
