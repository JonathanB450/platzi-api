# Platzi Api
Pequeña api que permite obtener los datos de los cursos aprobados de cualquier estudiante en Platzi, esto con el fin de poder ser utilizados es un portafolio profesional (el perfil de estudiante debe ser publico).
Para usar este paquete solo basta con instalarlo e importarlo a nuestro archivo donde vamos a trabajar, posterior a esto ejecutamos el paquete implementado promesas.
Ejemplo:
```
const platziApi = require('platzi-api')

platziApi(‘Nombre de usuario sin el @')
.then(response => console.log(response))
.catch(err => console.log(err))
```
***El nombre de usuario lo puedes conseguir yendo a la parte de “ver mi perfil” y copiando el user id que aparece en la url sin el @***

Este código retornara en caso de haberse completado con éxito, un array con objetos los cuales tendrán dos atributos, uno es la url de la imagen del curso y el otro el nombre del curso.
De esta manera podemos obtener los datos de los cursos realizados por cualquier estudiante que tenga un perfil publico y poder manipularlos
Esta api funciona gracias a Puppeteer y al web scrapping realizado a la página de usuario de cada persona.
Este proyecto no tiene ningún propósito de lucro, siéntanse libres de usarlo y modificarlo para sus proyectos.

[Ejemplo de sitio web empleando esta api](http://platzi-api.herokuapp.com/).


