import datos from '../data/posts';
import { Link } from "react-router-dom";

function PostsListPage() {
  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {datos.map((blog) => (
          <li key={blog.id}>
            <Link to={`/posts/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsListPage;
