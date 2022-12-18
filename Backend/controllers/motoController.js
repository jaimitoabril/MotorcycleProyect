//CRUD

import motoModel from "../models/motoModel.js"

//post

export async function createMoto(req, res){
    
    const moto= req.body.moto

    let motoDoc


    try {
        motoDoc = await motoModel.create(moto)        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    

    res.status(201).json(motoDoc)
    
}

// get

export async function readMoto(req, res){

    const idMoto = req.params.idMoto

    let motoDoc

    try {
        motoDoc = await motoModel.findOne({idMoto})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

     res.status(200).json(motoDoc)
}

export async function readTMoto(req, res){

    let motoDoc


    try {
        motoDoc = await motoModel.find()
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

     res.status(200).json(motoDoc)
}

// patch
export async function updateMoto(req, res){
         
   const idMoto = req.params.idMoto
   const updates = req.body.updates

    let motoDoc

    try {
        motoDoc = await motoModel.updateOne({idMoto},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

     res.status(200).json(motoDoc)
}

//delete

export async function deleteMoto(req, res){
    const idMoto = req.params.idMoto

    let motoDoc

    try {
        motoDoc = await motoModel.deleteOne({idMoto})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

     res.status(200).json(motoDoc)
}


