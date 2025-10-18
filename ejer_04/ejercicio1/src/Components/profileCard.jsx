import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileCard({ datos = [], id }) {

  const persona = datos.find(p => p.id === id);
  const srcImagen = persona ? persona.avatarUrl : '';
  return (
    <>
      <section>
        <div>
            <img src={srcImagen} alt={persona ? persona.nombre: ''} />
            <div>
                <h1></h1>
            </div>
        </div>
      </section>
    </>
  );
  
}

export default ProfileCard;
