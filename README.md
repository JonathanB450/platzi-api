# Platzi Api
pequeña api que permite obtener los datos de los cursos aprobados de cualquier estudiante en Platzi, esto con el fin de poder ser utilizados es un portafolio profesional (el perfil de estudiante debe ser publico).

Para usar este paquete solo basta con importarlo a nuestro archivo donde vamos a trabajar, posterior a esto ejecutamos el paquete implementado promesas.

Ejemplo:
platziApi("Nombre de usuario")
    .then(response => console.log(response))
    .catch(err => console.log(err))

De esta manera podemos obtener los datos de los cursos realizados por cualquier estudiante que tenga un perfil publico y poder manipularlos
Esta api funciona gracias a Puppeteer y al web scrapping realizado a la página de usuario de cada persona.

Este proyecto no tiene ningún propósito de lucro, siéntanse libres de usarlo y modificarlo para sus proyectos.

