import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Algo salió mal</h1>
      <p style={{ color: "red" }}>{error.statusText || error.message}</p>
      <Link to="/" style={{ color: "#0047ab", textDecoration: "underline" }}>Volver al inicio</Link>
    </div>
  );
}

export default ErrorPage;