import React from "react";

const ProfilePage = () => {
  const user = {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    url: "https://juanperez.com",
    sexo: "Masculino",
    convivientes: 2,
    aficiones: ["Lectura", "Deporte", "Música"],
    menu: ["Pizza", "Sushi"],
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Perfil de Usuario</h1>
      <div className="space-y-2">
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>URL:</strong> <a href={user.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">{user.url}</a></p>
        <p><strong>Sexo:</strong> {user.sexo}</p>
        <p><strong>Número de convivientes:</strong> {user.convivientes}</p>
        <p><strong>Aficiones:</strong> {user.aficiones.join(", ")}</p>
        <p><strong>Menú favorito:</strong> {user.menu.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
