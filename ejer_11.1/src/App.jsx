import { Routes, Route, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Actors from "./pages/Actors";
import ActorDetail from "./pages/ActorDetail";

export default function App() {
  return (
    <div className="container mt-3">

      <nav className="mb-4">
        <Link to="/movies" className="me-3">Películas</Link>
        <Link to="/actors">Actores</Link>
      </nav>

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />

        <Route path="/actors" element={<Actors />} />
        <Route path="/actors/:actorId" element={<ActorDetail />} />
      </Routes>

    </div>
  );
}
