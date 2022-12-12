//CRUD

import reservationModel from "../models/reservationModel.js"

//post

export async function createReservation(req, res){
    
    const reservacion= req.body.reservacion

    let reservacionDoc

    try {
        reservacionDoc = await reservationModel.create(reservacion)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    

     res.status(201).json(reservacionDoc)
    
}

// get

export async function readReservation(req, res){
    
    const idReservacion = req.params.idReservacion

    let reservacionDoc

    try {
        reservacionDoc = await reservationModel.findOne({idReservacion})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(reservacionDoc)
}

// patch
export async function updateReservation(req, res){
    
    const idReservacion = req.params.idReservacion
    const updates = req.body.updates

    let reservacionDoc

    try {
        reservacionDoc = await reservationModel.updateOne({idReservacion},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(reservacionDoc)
}

//delete

export async function deleteReservation(req, res){
    const idReservacion = req.params.idReservacion

    let reservacionDoc

    try {
        reservacionDoc = await reservationModel.deleteOne({idReservacion})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }

    res.status(200).json(reservacionDoc)
}


