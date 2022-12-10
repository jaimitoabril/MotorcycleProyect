//CRUD

import motoModel from "../models/motoModel.js"

//post

export function createMoto(req, res){
    
    const {llave, nombre, marca, modelo, descripcion}= req.body.moto
    
    motoModel.create({
        llave,
        nombre,
        marca,
        modelo,
        descripcion
     })

    res.sendStatus(200)
    
}

// get

export function readMoto(res){
    
    res.sendStatus(200)
}

// patch
export function updateMoto(req, res){
         
    res.sendStatus(200)
}

//delete

export function deleteMoto(res){
    //implementacion
    res.sendStatus(200)
}


