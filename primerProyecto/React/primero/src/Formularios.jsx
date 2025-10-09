function Formulario() {
  return (
    <section className="d-flex justify-content-center align-items-center my-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">Contacto</h2>

        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contacto" />

          <p style={{ display: "none" }}>
            <label>
              No llenar: <input name="bot-field" />
            </label>
          </p>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              placeholder="Tu correo"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;

