import { memo } from "react";
import Avatar from "./Avatar";

const TarjetaUsuario = memo(({ user }) => {
  console.log("TarjetaUsuario", user.id);

  return (
    <div style={{ border: "1px solid gray", margin: 5, padding: 5 }}>
      <p>{user.id} - {user.name}</p>
      <p>{user.email}</p>

      <Avatar avatar={user.avatar} isOnline={user.isOnline} />
    </div>
  );
});

export default TarjetaUsuario;
