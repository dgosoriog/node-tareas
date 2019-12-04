//Importar los paquetes y el modulo tareas-por-hacer
const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');
let comando = argv._[0];
//Menu de opciones.En cada opcion se llama a las correspondientes funciones creadas en tareas-por-hacer
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getLista();
        for (let tarea of listado) {
            console.log('=======POR HACER=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
        }
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log("Comando no reconocido");
}
