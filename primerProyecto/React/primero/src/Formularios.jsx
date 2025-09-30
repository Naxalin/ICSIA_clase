function Formulario() {
  return (
    <section className="d-flex justify-content-center align-items-center my-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">Contacto</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" className="form-control" id="correo" placeholder="Tu correo" required />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
