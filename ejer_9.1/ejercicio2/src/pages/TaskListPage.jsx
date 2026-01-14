import data from '../data/tasks'
import { Link } from "react-router-dom";

function TaskListPage (){
    return (
        <div>
        <h1>Lista de Tareas</h1>
        <ul>
            {data.map((tarea) => (
            <li key={tarea.id}>
                <Link to={`/dashboard/task/${tarea.id}`}>
                    {tarea.title} ({tarea.status})
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
} export default TaskListPage;