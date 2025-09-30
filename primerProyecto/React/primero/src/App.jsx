import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
 

  return (
    <>
       <section class="container my-4">
  <div class="row g-4">


    <div class="col-md-3">
      <div class="card h-100 text-center">
        <img src="img1.jpg" class="card-img-top" alt="Imagen 1"/>
        <div class="card-body">
          <h5 class="card-title">Explora la Naturaleza</h5>
          <p class="card-text">Descubre la belleza del mundo natural a través de nuestros proyectos y recursos.</p>
        </div>
      </div>
    </div>


    <div class="col-md-3">
      <div class="card h-100 text-center">
        <img src="img2.jpg" class="card-img-top" alt="Imagen 2"/>
        <div class="card-body">
          <h5 class="card-title">Aventuras al Aire Libre</h5>
          <p class="card-text">Explora senderos, parques y reservas naturales increíbles.</p>
        </div>
      </div>
    </div>


    <div class="col-md-3">
      <div class="card h-100 text-center">
        <img src="img3.jpg" class="card-img-top" alt="Imagen 3"/>
        <div class="card-body">
          <h5 class="card-title">Proyectos Sostenibles</h5>
          <p class="card-text">Contribuye con iniciativas que protegen el medio ambiente.</p>
        </div>
      </div>
    </div>


    <div class="col-md-3">
      <div class="card h-100 text-center">
        <img src="img4.jpg" class="card-img-top" alt="Imagen 4"/>
        <div class="card-body">
          <h5 class="card-title">Educación Ambiental</h5>
          <p class="card-text">Aprende sobre la naturaleza y cómo cuidarla desde casa.</p>
        </div>
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default App
