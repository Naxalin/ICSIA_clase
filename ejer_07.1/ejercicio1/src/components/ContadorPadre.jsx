// src/components/ContadorPadre.jsx
import { useState } from "react";
import ListaIntermedia from "./ListaIntermedia";

export default function ContadorPadre() {
  console.log("� Render ContadorPadre");

  const [contador, setContador] = useState(0);

  const [usuarios] = useState(() =>
    Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      name: `Usuario ${i + 1}`,
      email: `usuario${i + 1}@mail.com`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
      isOnline: Math.random() > 0.5, 
    }))
  );

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador(c => c + 1)}>
        Incrementar
      </button>

      <ListaIntermedia usuarios={usuarios} />
    </div>
  );
}
