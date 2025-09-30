function Footer() {
  return (
    <footer className="text-light py-4 mt-5" style={{ backgroundColor: "#28a745" }}>
      <div className="container text-center">
        <h5>Naturaleza Viva</h5>
        <p className="mb-0">&copy; {new Date().getFullYear()} Naturaleza Viva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
