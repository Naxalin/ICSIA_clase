import { useState, useCallback } from "react";
import ToastContainer from "./components/ToastContainer";

let idCounter = 1;

export default function App() {
  const [errors, setErrors] = useState([]);

  const addError = () => {
    const newError = {
      id: idCounter++,
      message: "Error aleatorio " + Math.floor(Math.random() * 100),
    };
    setErrors(prev => [...prev, newError]);
  };

  const clearError = useCallback(id => {
    setErrors(prev => prev.filter(e => e.id !== id));
  }, []);

  const clearAll = () => {
    setErrors([]);
  };

  return (
    <div>
      <h1>Toast de Errores</h1>
      <button onClick={addError}>Agregar Error</button>
      <button onClick={clearAll}>Limpiar Todos</button>

      <ToastContainer errors={errors} onClear={clearError} />
    </div>
  );
}
