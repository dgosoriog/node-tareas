## Aplicacion de comandos NodeJS
Recuerda instalar los paquetes 'yargs' y 'colors' con 
```
npm install
```
La aplicacion permite tener un registro de tareas y realizar acciones como crear,actualizar,eliminar una tarea o listar todas las tareas.La aplicación tiene la estructura de modelo-vista-controlador.

Cada tarea tiene su descripción y un campo llamado completado el cual indica si la tarea ha sido completada (true) o no ha sido completada(false).Las tareas se guardan en formato JSON en el archivo data.json,el cual viene siendo el modelo de la aplicación.

El archivo tareas-por-hacer.json contiene todas las funciones requeridas para la aplicacion; esto es el controlador.
La aplicacion se debe ejecutar en consola,llamando al archivo app.json. Esto constituye la vista de la aplicacion.

