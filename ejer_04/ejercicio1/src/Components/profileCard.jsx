import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ProfileCard({ datos = [], id }) {

  const persona = datos.find(p => p.id === id);

  if (!persona) {
    return <p className="text-center mt-4">Selecciona un usuario para ver los detalles</p>;
  }

  const srcImagen = persona.avatarUrl || '';

  return (
    <section className='border'>
      <div className='d-flex border p-3'>
        <img src={srcImagen} alt={persona.nombre} className='px-4 img-fluid rounded-circle' />
        <div>
          <h1>{persona.nombre}</h1>
          <p>{persona.email}</p>
        </div>
      </div>

      <div className='px-5 border'>
        <h3>Información de contacto</h3>
        <p><b>Calle:</b> {persona.direccion?.calle}</p>
        <p><b>Ciudad:</b> {persona.direccion?.ciudad}</p>
      </div>

      <div className='px-5 border'>
        <h3>Aficiones</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {persona.aficiones.map((aficion, index) => (
            <span
              key={index}
              style={{
                backgroundColor: getRandomColor(),
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '8px',
                display: 'inline-block'
              }}
            >
              {aficion}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
