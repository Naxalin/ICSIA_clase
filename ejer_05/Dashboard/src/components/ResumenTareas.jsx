function ResumenTareas({ DatosT }) {
  const completadas = DatosT.filter((tarea) => tarea.completada);

  return (
    <p>
      Tienes completado: {completadas.length} de {DatosT.length} tareas
    </p>
  );
}

export default ResumenTareas;
