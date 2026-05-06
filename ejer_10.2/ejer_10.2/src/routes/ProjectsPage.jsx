import { useLoaderData } from "react-router-dom";
import { getproyectos } from "../utils/api";
import { ProjectList } from "../components/ProjectList";
export async function loader() {
  try {
    const proyectos = await getproyectos();
    return proyectos;
  } catch (error) {
    console.error("Error al intentar extraer los proyectos:", error);
    throw error;
  }
}

export function ProjectsPage() {
  const proyectos = useLoaderData();
  return (
    <div>
      <ProjectList proyectos={proyectos} />
    </div>
  );
}

