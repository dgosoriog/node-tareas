const fs = require('fs'); //importar paquete fs para manejar archivos

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);//transforma a formato JSON
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('NO se pudo guardar', err);
    });
    //Escribir en el archivo data.json
}

let tareasPorHacer = [];
const cargarDB = () => {
    //Obtiene los datos del archivo data.json y los guarda en el vector tareasPorHacer.Si el archivo esta vacio, se devuelve el vector vacio.
    try {
        tareasPorHacer = require('../DB/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const crear = (descripcion) => {
    //Funcion para crear una tarea.Primero se llama a cargarDB para obtener todas las tareas
    cargarDB();
    let tarea = {
        descripcion,
        completado: false

    };//Se crea el objeto tarea
    tareasPorHacer.push(tarea);//Se agrega el objeto al vector tareasPorHacer
    guardarDB();//Guardar el vector en el archivo data.json 
    return tarea;
}

const getLista = () => {
    //Funcion para listar las tareas,se llama a cargarDB para obtener el  vector tareasPorHacer
    cargarDB();
    return tareasPorHacer;
}

const borrar = (descripcion) => {
    //Funcion para borrar una tarea.Primero se llama a cargarDB
    cargarDB();
    //Busca la tarea a borrar en el vector tareasPorHacer con el método filter y se guarda en la variable nuevolistado
    let nuevolistado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    //Si se encontro la tarea, no se realiza ninguna accion,caso contrario se asigna a tareasPorHacer lo que tiene nuevolistado
    //y se llama a guardarDB con lo cual la tarea ha sido descartada
    if (tareasPorHacer.length === nuevolistado.length) {
        return false
    } else {
        tareasPorHacer = nuevolistado;
        guardarDB();
        return true;
    }
}


const actualizar = (descripcion, completado = true) => {
    //Funcion para borrar una tarea.Primero se llama a cargarDB.El parametro completado=true con lo cual la tarea cambiara su estado
    cargarDB();
    //Busca la tarea a actualizar con el metodo findIndex el cual devuelve el indice de la tarea
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //Si se encuentra la tarea, se cambia el atributo 'completado' de la tarea
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}
//Exportar las funciones
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}
