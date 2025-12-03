import { memo } from "react";

const UserCard = ({ user }) => {
  console.log("Render UserCard", user.id);

  return (
    <div style={{ border: "1px solid gray", margin: 2, padding: 2 }}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default memo(UserCard);
