# javascript-profesional
Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi

### Apuntes

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel. Parcel empaqueta y sirve el bundle (ya no se necesita live-server).


### Recomendaciones para errores

Limpiar almacenamiento del navegador (clear storage) : Borra el service worker

Borrar las carpetas generadas por parcel:

En windows 

```
rd ".cache" -s
rd "dist" -s
```
En linux / git bash

rm -rf .cache dist


### Desplegar web:

npm start

http://localhost:1234/index.html

## Para pasar codigo de typescript a js instalar la herramienta Typescript

npm i -D typescript
