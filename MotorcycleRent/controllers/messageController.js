//CRUD

import messageModel from "../models/messageModel.js"

//post

export async function createMessage(req, res){
    
    const {idMensaje, mensaje, idCliente}= req.body.mensaje
    
    const mensajeD = await messageModel.create({  
        idMensaje, 
        mensaje, 
        idCliente
     })

     res.status(201).json(mensajeD)
   
}

// get

export function readMessage(res){
    //implementacion
    res.sendStatus(200)
}

// patch
export function updateMessage(res){
    //implementacion
    res.sendStatus(200)
}

//delete

export function deleteMessage(res){
    //implementacion
    res.sendStatus(200)
}


