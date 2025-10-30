
function Article({ datos, fijado, desfijar }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {datos?.map((element) => (
          <div key={element.id} className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.category}</p>
                {element.pinned && <span className="badge bg-success">Fijado</span>}
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-primary"
                  onClick={() => fijado(element.id)}
                >
                  Fijar
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => desfijar(element.id)}
                >
                  Desfijar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
