import { useParams, Link } from "react-router-dom";
import { getMovieById, getCastByMovieId } from "../lib/cinema";

export default function MovieDetail() {
  const { movieId } = useParams();

  const movie = getMovieById(movieId);
  const cast = getCastByMovieId(movieId);

  return (
    <>
      <h2>{movie.title}</h2>

      <img src={movie.poster} width="200" />

      <p>{movie.synopsis}</p>

      <h4>Reparto</h4>

      {cast.map(actor => (
        <div key={actor.id}>
          <Link to={`/actors/${actor.id}`}>
            {actor.name} — {actor.character}
          </Link>
        </div>
      ))}
    </>
  );
}
