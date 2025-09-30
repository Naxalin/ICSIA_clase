import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Formulario from './Formularios.jsx';
import Footer from './Footer.jsx';

//import './index.css'
import App from './App.jsx'
import Menu from './MenuCabecera.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <App />
    <Formulario />
    <Footer />

  
  </StrictMode>,
)
