const proyectos = [
  { id: 1, nombre: "Diseño Web" },
  { id: 2, nombre: "App Móvil" },
];
export const getproyectos = async () => {
  return proyectos;
};


const tareas = [
    { id: 1, titulo: "Crear wireframes", projectId: 1, "completa": false },
    { id: 2, titulo: "Desarrollar frontend", projectId: 1, "completa": false },
    { id: 3, titulo: "Diseñar UI", projectId: 2, "completa": false },
    { id: 4, titulo: "Implementar backend", projectId: 2, "completa": false },
];


export const gettareas = async ( { projectId } ) => {
  return tareas.filter(tarea => tarea.projectId === Number(projectId));
};

export function nuevaTarea ({ projectId, titulo }) {
  const nuevaTarea = { id: tareas.length + 1, titulo, projectId: Number(projectId), "completa": false };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

export function eliminarTarea ( { tareaId } ) {
  const posicion = tareas.findIndex(tarea => tarea.id === tareaId);
  if (posicion !== -1) {
    tareas.splice(posicion, 1);
    return true;
  } else {
    return false;
  }
}
export function nuevoProyecto({ nombre }) {
  const nuevo = { id: proyectos.length + 1, nombre }; 
  proyectos.push(nuevo);
  return nuevo;
}
export function completarTarea ( { tareaID }) {
  const tarea = tareas.find(tarea => tarea.id === tareaID);
  if (tarea) {
    tarea.completa = true;
    return tarea;
  } else {
    return null;
  }
}

