//CRUD

import motoModel from "../models/motoModel.js"

//post

export async function createMoto(req, res){
    
    const {idMoto, nombre, marca, modelo, descripcion, idCategoria, idMensaje, idReservacion}= req.body.moto
    
    const motoD = await motoModel.create({
        idMoto, 
        nombre, 
        marca, 
        modelo, 
        descripcion, 
        idCategoria, 
        idMensaje, 
        idReservacion        
     })

    res.status(201).json(motoD)
    
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


