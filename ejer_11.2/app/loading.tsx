export default function Loading() {
  return (
    <div className="container">
      <div className="page-hero">
        <div>
          <div className="loading-skeleton" style={{ width: 200, height: 36, marginBottom: 8 }} />
          <div className="loading-skeleton" style={{ width: 120, height: 18 }} />
        </div>
      </div>
      <div className="recipes-grid">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="recipe-card">
            <div className="loading-skeleton" style={{ width: 100, height: 14, marginBottom: 12 }} />
            <div className="loading-skeleton" style={{ width: '80%', height: 24, marginBottom: 8 }} />
            <div className="loading-skeleton" style={{ width: '100%', height: 60, marginBottom: 16 }} />
            <div className="loading-skeleton" style={{ width: 100, height: 32 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
