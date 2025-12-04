import UserInfo from "./components/UserInfo";
import UserSelector from "./components/UserSelector";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <div className="container py-4 bg-dark min-vh-100">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-warning">Ejercicio 2: Tareas Multi-usuario</h2>
            <UserInfo />
          </div>

          <UserSelector />

          <TaskInput />

          <TaskList />
        </div>
      </TasksProvider>
    </AuthProvider>
  );
}
