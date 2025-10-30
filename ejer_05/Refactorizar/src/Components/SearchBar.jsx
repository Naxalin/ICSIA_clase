import React, { useState } from 'react';

function SearchBar({ busquedaEnviada }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const valor = e.target.value;
    setSearchTerm(valor);
    busquedaEnviada(valor);
  };

  return (
    <form className="my-3">
      <div className="input-group">
        <span className="input-group-text" id="search-label">🔍</span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar artículo..."
          value={searchTerm}
          onChange={handleChange}
          aria-label="Buscar artículo"
          aria-describedby="search-label"
        />
      </div>
    </form>
  );
}

export default SearchBar;
