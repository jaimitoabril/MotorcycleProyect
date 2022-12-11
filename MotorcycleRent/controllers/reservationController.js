//CRUD

import reservationModel from "../models/reservationModel.js"

//post

export async function createReservation(req, res){
    
    const {idReservacion, fechaInicio, fechaDevolucion, idMoto, idCliente}= req.body.reservacion
    
    const reservacionD = await reservationModel.create({  
        idReservacion,
        fechaInicio,
        fechaDevolucion,
        idMoto,
        idCliente
     })

     res.status(201).json(reservacionD)
    
}

// get

export function readReservation(res){
    //implementacion
    res.sendStatus(200)
}

// patch
export function updateReservation(res){
    //implementacion
    res.sendStatus(200)
}

//delete

export function deleteReservation(res){
    //implementacion
    res.sendStatus(200)
}


