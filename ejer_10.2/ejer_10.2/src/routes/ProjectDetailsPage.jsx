import { useLoaderData, useParams } from "react-router-dom";
import { gettareas } from "../utils/api";
import { TaskList } from "../components/TaskList";

export async function tareasLoader({ params }) {
  const { projectId } = params;
  return gettareas({ projectId });
}


export function ProjectDetailsPage() {
  const tareas = useLoaderData();
  const { projectId } = useParams();  
  return <TaskList tareas={tareas} projectId={projectId} />;
}