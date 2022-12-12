//CRUD

import messageModel from "../models/messageModel.js"

//post

export async function createMessage(req, res){
    
    const mensaje= req.body.mensaje

    let mensajeDoc


    try {
        mensajeDoc = await messageModel.create(mensaje)        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    

     res.status(200).json(mensajeDoc)
   
}

// get

export async function readMessage(req, res){
    
    const idMensaje = req.params.idMensaje

    let mensajeDoc

    try {
        mensajeDoc = await messageModel.findOne({idMensaje})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(mensajeDoc)  
}

// patch
export async function updateMessage(req, res){

    const idMensaje = req.params.idMensaje
    const updates = req.body.updates

    let mensajeDoc

    try {
        mensajeDoc = await messageModel.updateOne({idMensaje},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(mensajeDoc) 
  



}

//delete

export async function deleteMessage(req, res){
    
    const idMensaje = req.params.idMensaje

    let mensajeDoc

    try {
        mensajeDoc = await messageModel.deleteOne({idMensaje})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(mensajeDoc)  
   
}


