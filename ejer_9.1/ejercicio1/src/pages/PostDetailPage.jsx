import { useParams, Link } from "react-router-dom";
import datos from "../data/posts.js";

function PostDetailPage() {
  const { id } = useParams();
    console.log("id desde useParams:", id);
  const numericId = Number(id); 
  const PaginaDetalles = datos.find(p => p.id === numericId);

  if (!PaginaDetalles) {
    return <h1>Artículo no encontrado</h1>;
  }

  return (
    <>
      <h1>{PaginaDetalles.title}</h1>
      <p>{PaginaDetalles.content}</p>
      <Link to="/posts">Volver a la lista de artículos</Link>
    </>
  );
}

export default PostDetailPage;
