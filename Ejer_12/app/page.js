'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusError, setStatusError] = useState(false);
  const [terms, setTerms] = useState(['', '', '']);
  const [searching, setSearching] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    setLoading(true);
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(Array.isArray(data) ? data : []);
    } catch {
      setImages([]);
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  }

  async function handleUpload() {
    if (!selectedFile) return;

    setUploading(true);
    setStatusMsg('Subiendo imagen y analizando contenido...');
    setStatusError(false);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Error al subir');

      setStatusMsg('✅ Imagen subida y analizada correctamente.');
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setImages(prev => [data, ...prev]);
    } catch (err) {
      setStatusMsg(err.message);
      setStatusError(true);
    } finally {
      setUploading(false);
    }
  }

  function handleTermChange(index, value) {
    setTerms(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  async function handleSearch() {
    const activeTerms = terms.filter(t => t.trim());
    setSearching(true);
    try {
      const q = activeTerms.join(',');
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setImages(Array.isArray(data) ? data : []);
    } catch {
      setImages([]);
    } finally {
      setSearching(false);
    }
  }

  async function handleClearSearch() {
    setTerms(['', '', '']);
    await fetchImages();
  }

  return (
    <main>
      <section className="upload-section">
        <h2>Subir imagen</h2>
        <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
          <label>
            <div className="upload-icon">🖼️</div>
            <p>Haz clic para seleccionar una imagen</p>
            <p>JPG, PNG, WEBP hasta 10 MB</p>
            {selectedFile && (
              <p className="selected-file">Seleccionada: {selectedFile.name}</p>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              onClick={e => e.stopPropagation()}
            />
          </label>
        </div>

        <button
          className="btn"
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
        >
          {uploading ? 'Subiendo...' : 'Subir y analizar'}
        </button>

        {statusMsg && (
          <p className={`status-msg${statusError ? ' error' : ''}`}>{statusMsg}</p>
        )}
      </section>

      <section className="search-section">
        <h2>Buscar por contenido</h2>
        <div className="search-row">
          {terms.map((term, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Término ${i + 1}`}
              value={term}
              onChange={e => handleTermChange(i, e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
          ))}
          <button onClick={handleSearch} disabled={searching}>
            {searching ? 'Buscando...' : 'Buscar'}
          </button>
          <button onClick={handleClearSearch} style={{ background: '#888' }}>
            Ver todas
          </button>
        </div>
        <p className="search-hint">
          Puedes buscar hasta 3 términos simultáneamente. Se mostrarán las imágenes que contengan todos los términos indicados.
        </p>
      </section>

      <section className="images-section">
        <h2>Imágenes ({images.length})</h2>

        {loading ? (
          <p className="loading">Cargando imágenes...</p>
        ) : images.length === 0 ? (
          <p className="no-results">No se encontraron imágenes.</p>
        ) : (
          <div className="images-grid">
            {images.map(img => (
              <div key={img._id} className="image-card">
                <img src={img.url} alt={img.filename} />
                <div className="image-card-body">
                  <p className="filename">{img.filename}</p>
                  <div className="elements-list">
                    {img.elements?.map((el, i) => (
                      <span key={i} className="element-tag">{el}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
