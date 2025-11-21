import { useEffect, useState } from "react";

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setResults([]); 
    }
  };

  useEffect(() => {
    if (searchTerm === "") return; 

    const timeoutId = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTerm}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error(err));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div>
      <h2>Búsqueda de usuarios</h2>

      <input
        type="text"
        placeholder="Buscar por username..."
        value={searchTerm}
        onChange={handleChange}
      />

      <ul>
        {results.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
} export default UserSearch;
