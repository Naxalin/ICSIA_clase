import React, { useState } from 'react';
import allArticles from './Components/datos/datos.js';
import SearchBar from './Components/SearchBar.jsx';
import ArticleList from './Components/ArticleList.jsx';

function App() {
  const [articulos, setArticulos] = useState(allArticles);
  const [cambio, setCambio] = useState("");
  
const fijado = (id) => {
  const articuloFijado = articulos.map((element) => { 
    if(element.id === id){
      return {...element, pinned: true};

    } else {
      return {...element, pinned: false};
    }
  });

  const primerElemento = articuloFijado.find(el => el.id === id);
  const resto = articuloFijado.filter(el => el.id !== id);

  setArticulos([primerElemento, ...resto]);
}

const desfijar = (id) => {
  const nuevoArray = articulos.map(el =>
    el.id === id ? { ...el, pinned: false } : el
  );
  setArticulos(nuevoArray);
}
  return (
    <>
      <SearchBar busquedaEnviada={(valor) =>
        setArticulos(
          allArticles.filter(art =>
            art.title.toLowerCase().includes(valor.toLowerCase()) &&
            (cambio === "" || art.category === cambio)
          )
        )
      } />

      <select name="categorias" id="categorias" onChange={(e) => setCambio(e.target.value)}>
        <option value="">Todas</option>
        <option value="React">React</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <ArticleList articulos={articulos} fijado={fijado} desfijar={desfijar}/>
    </>
  );
}

export default App;
