Pista: Para que el efecto se ejecute solo una vez, ¿qué debes pasar como segundo argumento a useEffect?

Para que el useEffect se ejecute solo una vez cuando el componente se monta, hay que pasar un array vacío [] como segundo argumento. Esto le dice a React que el efecto no depende de ninguna variable y por eso solo debe ejecutarse al inicio.