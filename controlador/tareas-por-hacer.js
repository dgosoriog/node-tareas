const fs = require('fs');

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('NO se pudo guardar', err);
    });
}

let tareasPorHacer = [];

const cargarDB = () => {
    try {
        tareasPorHacer = require('../DB/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false

    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevolistado.length) {
        return false
    } else {
        tareasPorHacer = nuevolistado;
        guardarDB();
        return true;
    }
    //let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //if (index >= 0) {
    //    tareasPorHacer.pop(tareasPorHacer[index]);
    //    return true;
    //}
    //return false;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}