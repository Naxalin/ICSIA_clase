import { Link } from "react-router-dom";
import { getAllActors } from "../lib/cinema";

export default function Actors() {
  const actors = getAllActors();

  return (
    <>
      <h2>Actores</h2>

      {actors.map(a => (
        <div key={a.id}>
          <Link to={`/actors/${a.id}`}>{a.name}</Link>
        </div>
      ))}
    </>
  );
}
