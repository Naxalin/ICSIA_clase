import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList({ perfiles = [], onSeleccionar }) {
  return (
    <>
      <section className=''>
        <div className='border bg-light p-30 w-50 mx-auto'>
        <h2 className='text-center py-2'>Lista de Usuarios</h2>
      </div>
    <div
      className="border  rounded-0 px-3 pb-3 w-50 mx-auto">


      <div>
        <div className='d-flex'>
            <img className='img-fluid mt-3 border' style={{width: '40px', height: '40px'}}  src="https://media.istockphoto.com/id/1393454872/es/vector/icono-de-lupa-silueta-negra-vista-lateral-frontal-ilustraci%C3%B3n-gr%C3%A1fica-plana-simple-vectorial.jpg?s=612x612&w=0&k=20&c=VEcXHNXfojFEKV6fLnqedSDUZ4RE--X4bLDPcBygEzc=" alt="" />
            <input type="search" name="perfiles" id="perfiles" placeholder='Buscar Usuario...' className="form-control mb-3 mt-3 rounded-0 pb-2" />

        </div>
        <ul className='border rounded-4 list-unstyled'>
          {perfiles.map((perfil) => (
            <li className='border rounded-3 ps-5 p-2 btn-hover'style={{cursor: 'pointer'}} onClick={() => onSeleccionar(perfil.id)} key={perfil.id}>{perfil.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
      </section>
    </>
  );
  
}

export default UserList;
