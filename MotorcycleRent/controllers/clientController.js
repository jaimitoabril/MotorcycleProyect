//CRUD

import clientModel from "../models/clientModel.js"

//post

export async function createClient(req, res){
    
    const cliente= req.body.cliente

    let clienteDoc

    try {
        clienteDoc = await clientModel.create(cliente)        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    

    res.status(201).json(clienteDoc)
}   

// get

export async function readClient(req, res){
    
    const idCliente = req.params.idCliente
    
    let clienteDoc

    try {
        clienteDoc = await clientModel.findOne({idCliente})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }
    
   res.status(200).json(clienteDoc)
}

// patch
export async function updateClient(req, res){

    const idCliente = req.params.idCliente
    const updates = req.body.updates
    
    let clienteDoc

    try {
        clienteDoc = await clientModel.updateOne({idCliente},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }
    
   res.status(200).json(clienteDoc)
   
}

//delete

export async function deleteClient(req, res){
    const idCliente = req.params.idCliente
    
    let clienteDoc

    try {
        clienteDoc = await clientModel.deleteOne({idCliente})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }
    
   res.status(200).json(clienteDoc)
}


