//CRUD

import userModel from "../models/userModel.js"

//post

export async function createUser(req, res){
    
    const usuario = req.body.usuario

    let usuarioDoc 

    try {
        usuarioDoc = await userModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }    
     
    res.status(201).json(usuarioDoc)
    
}

// get

export async function readUser(req, res){
    
    const idUsuario = req.params.idUsuario

    let usuarioDoc

    try {
        usuarioDoc = await userModel.findOne({idUsuario})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }   

    res.status(200).json(usuarioDoc)
}

// patch
export async function updateUser(req, res){
    
    const idUsuario = req.params.idUsuario
    const updates = req.body.updates
    

    let usuarioDoc

    try {
        usuarioDoc = await userModel.updateOne({idUsuario},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }  

    res.status(200).json(usuarioDoc)
    
}

//delete

export async function deleteUser(req, res){
    const idUsuario = req.params.idUsuario

    let usuarioDoc

    try {
        usuarioDoc = await userModel.deleteOne({idUsuario})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }   

    res.status(200).json(usuarioDoc)
}


