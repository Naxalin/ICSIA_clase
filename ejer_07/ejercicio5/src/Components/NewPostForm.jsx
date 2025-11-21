import { useState, useCallback, useEffect } from "react";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdPost, setCreatedPost] = useState(null);

  const addPost = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      const data = await res.json();
      setCreatedPost(data);
    } catch (err) {
      console.error("Error al crear el post:", err);
    }
  }, [title, body]);

  useEffect(() => {
    if (createdPost) {
      alert(`Post creado con ID: ${createdPost.id}`);
    }
  }, [createdPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "300px", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          placeholder="Cuerpo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ width: "300px", height: "100px", padding: "5px" }}
        />
      </div>
      <button type="submit" style={{ padding: "5px 10px" }}>
        Crear Post
      </button>
    </form>
  );
}
