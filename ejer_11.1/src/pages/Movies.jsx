import { Link } from "react-router-dom";
import { getAllMovies } from "../lib/cinema";

export default function Movies() {
  const movies = getAllMovies();

  return (
    <>
      <h2>Películas</h2>

      <div className="row">
        {movies.map(m => (
          <div className="col-3 mb-3" key={m.id}>
            <Link to={`/movies/${m.id}`}>
              <img src={m.poster} className="img-fluid" />
              <p>{m.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
