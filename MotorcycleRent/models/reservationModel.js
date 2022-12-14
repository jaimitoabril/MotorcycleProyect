import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
    "idReservacion":{type:Number, required:true, unique:true},
    "fechaInicio":{type:Date, required:true},
    "fechaDevolucion":{type:Date, required:true},
    "idMoto":Number,
    "idCliente":Number
})

export default mongoose.model("reservations", reservationModel)