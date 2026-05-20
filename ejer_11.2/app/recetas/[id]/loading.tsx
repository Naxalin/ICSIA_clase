export default function Loading() {
  return (
    <div className="container">
      <div className="detail-header">
        <div className="loading-skeleton" style={{ width: 130, height: 14, marginBottom: 16 }} />
        <div className="loading-skeleton" style={{ width: '70%', height: 44, marginBottom: 12 }} />
        <div className="loading-skeleton" style={{ width: 260, height: 14, marginBottom: 16 }} />
        <div className="loading-skeleton" style={{ width: '90%', height: 20, marginBottom: 8 }} />
        <div className="loading-skeleton" style={{ width: '60%', height: 20 }} />
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <div className="loading-skeleton" style={{ width: 140, height: 40 }} />
          <div className="loading-skeleton" style={{ width: 140, height: 40 }} />
        </div>
      </div>
      {[1, 2].map((i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <div className="loading-skeleton" style={{ width: 180, height: 28, marginBottom: 12 }} />
          <div className="loading-skeleton" style={{ width: '100%', height: 120, borderRadius: 8 }} />
        </div>
      ))}
    </div>
  );
}
