import { nuevaTarea } from "../utils/api";
import { Form, redirect } from "react-router-dom";

export function NewTaskPage() {

  
  return (
    <div>
      <h1>Crear Nueva Tarea</h1>
      <Form method="post">
        <label htmlFor="nombre">Titulo de la Tarea:</label>
        <input type="text" id="nombre" name="nombre" />
        <button type="submit">Crear Tarea</button>        
      </Form>
    </div>
  );
}



export async function action ({ params, request }) {
  const { projectId } = params;

  const datos = await request.formData();

  const nombre = datos.get("nombre");
  await nuevaTarea({ projectId: Number(projectId), titulo: nombre });
  return redirect(`/proyectos/${projectId}`);
}
