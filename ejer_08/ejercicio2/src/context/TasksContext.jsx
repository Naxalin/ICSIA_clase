import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const initialTasks = [
  { id: 1, text: "Configurar el entorno de desarrollo", author: "Ana", completed: true },
  { id: 2, text: "Crear el contexto de autenticación", author: "Ana", completed: true },
  { id: 3, text: "Implementar el reducer de tareas", author: "Luis", completed: false },
  { id: 4, text: "Optimizar los componentes con React.memo", author: "Luis", completed: false }
];

function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "TOGGLE":
      return state.map(t =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );

    case "DELETE":
      return state.filter(t => t.id !== action.payload);

    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
