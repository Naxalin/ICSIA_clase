import { useEffect, useState } from "react";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadComments() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        if (!res.ok) {
          throw new Error("Error al cargar comentarios");
        }

        const data = await res.json();
        if (!isCancelled) {
          setComments(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || "Error desconocido");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadComments();
    return () => {
      isCancelled = true;
    };
  }, [postId]);

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>Comentarios del post {postId}</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.email}:</strong> {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
