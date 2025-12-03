import { memo } from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  console.log("Render UserList");

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(UserList);
