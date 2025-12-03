import { memo } from "react";
import TarjetaUsuario from "./TarjetaUsuario";

const ListaIntermedia = memo(({ usuarios }) => {
  console.log("� Render ListaIntermedia");

  return (
    <div>
      {usuarios.map(user => (
        <TarjetaUsuario key={user.id} user={user} />
      ))}
    </div>
  );
});

export default ListaIntermedia;
