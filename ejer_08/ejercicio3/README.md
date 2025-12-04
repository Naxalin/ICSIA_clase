Justificación de Arquitectura:
Usé useReducer porque el carrito tiene un estado más complejo que solo una lista de productos. Cada producto tiene cantidad y precio, y el total depende de todo eso.

Si usara varios useState, por ejemplo uno para los items y otro para el total, al incrementar la cantidad tendría que actualizar ambos estados por separado. Esto puede causar errores o que los datos queden desincronizados. Con useReducer todo se maneja en un solo lugar con acciones claras (ADD, INCREMENT, etc.), así el estado se mantiene consistente y es más fácil de manejar.

Análisis de Rendimient:
Si veo que un componente como BotonPromocion se renderiza cada vez que añado un producto, probablemente sea porque recibe funciones o props que cambian en cada render del carrito. React lo interpreta como algo nuevo y vuelve a renderizarlo.

Para comprobarlo usaría las React DevTools, en la pestaña “Profiler”, para ver qué props cambian en cada render. Si confirmo que ese es el problema, puedo usar useCallback para memoizar las funciones o separar el componente para que no dependa del estado del carrito y evitar renders innecesarios.