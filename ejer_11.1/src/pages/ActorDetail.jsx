import { useParams, Link } from "react-router-dom";
import { getActorById, getFilmographyByActorId } from "../lib/cinema";

export default function ActorDetail() {
  const { actorId } = useParams();

  const actor = getActorById(actorId);
  const movies = getFilmographyByActorId(actorId);

  return (
    <>
      <h2>{actor.name}</h2>

      <img src={actor.photo} width="200" />

      <p>{actor.bio}</p>

      <h4>Filmografía</h4>

      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </>
  );
}
