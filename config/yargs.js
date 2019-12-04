//Creacion de los comandos
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por defecto'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
