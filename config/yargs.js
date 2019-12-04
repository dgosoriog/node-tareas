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

const borrado = {
    demand: true,
    alias: 'b',
    desc: 'Borrar la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })

.command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borrar una tarea', {
        descripcion

    })
    .help()
    .argv;
module.exports = {
    argv
}
