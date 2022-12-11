//CRUD

import clientModel from "../models/clientModel.js"

//post

export async function createClient(req, res){
    
    const {idCliente, email, nombre, edad, idMensaje, idReservacion}= req.body.cliente
    
    const clienteD = await clientModel.create({  
        idCliente, 
        email, 
        nombre, 
        edad, 
        idMensaje,
        idReservacion
     })

    res.status(201).json(clienteD)
}   

// get

export function readClient(req, res){
    //implementacion
    res.sendStatus(200)
}

// patch
export function updateClient(req, res){
    //implementacion
    res.sendStatus(200)
}

//delete

export function deleteClient(req, res){
    //implementacion
    res.sendStatus(200)
}


