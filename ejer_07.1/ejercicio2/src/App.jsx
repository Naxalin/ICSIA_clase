import { useState, useMemo } from "react";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";

const generateUsers = () =>
  Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Usuario ${i}`,
    email: `usuario${i}@mail.com`,
  }));

export default function App() {
  console.log("� Render App");

  const [search, setSearch] = useState("");
  const [users] = useState(generateUsers());

  const filtered = useMemo(() => {
    return users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div>
      <h1>Filtro de Usuarios</h1>
      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filtered} />
    </div>
  );
}
