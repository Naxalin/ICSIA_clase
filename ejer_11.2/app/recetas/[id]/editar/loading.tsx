export default function Loading() {
  return (
    <div className="container" style={{ maxWidth: 680, paddingTop: '2.5rem' }}>
      <div className="loading-skeleton" style={{ width: 140, height: 14, marginBottom: 16 }} />
      <div className="loading-skeleton" style={{ width: 200, height: 36, marginBottom: 8 }} />
      <div className="loading-skeleton" style={{ width: 280, height: 18, marginBottom: '2rem' }} />
      <div className="form-card">
        {[140, 80, 60, 130, 200].map((h, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <div className="loading-skeleton" style={{ width: 100, height: 12, marginBottom: 8 }} />
            <div className="loading-skeleton" style={{ width: '100%', height: h }} />
          </div>
        ))}
      </div>
    </div>
  );
}
