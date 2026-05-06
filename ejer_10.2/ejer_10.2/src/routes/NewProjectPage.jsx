import { nuevoProyecto } from "../utils/api";
import { Form, redirect } from "react-router-dom";
export function NewProjectPage() {
  return (
    <div>
      <h1>Crear Nuevo Proyecto</h1>
      <Form method="post">
        <label htmlFor="nombre">Nombre del Proyecto:</label>
        <input type="text" id="nombre" name="nombre" minLength={5} />
        <button type="submit">Crear</button>
      </Form>
    </div>
  );
}

export async function action ({ params,request }) {
  const { projectId } = params;
  const datos = await request.formData();

  const nombre = datos.get("nombre");
  await nuevoProyecto({ nombre });
  return redirect(`/proyectos/${projectId}`);
}
