import { useTasks } from "../context/TasksContext";

import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div>
      <h4 className="text-white border-bottom border-warning pb-2">Tareas Pendientes</h4>

      <ul className="list-group bg-dark mt-3">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
    </div>
  );
}
