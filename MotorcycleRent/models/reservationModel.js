import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
    "idReservacion":{type:Number, required:true, unique:true},
    "fechaInicio":{type:String, required:true},
    "fechaDevolucion":{type:String, required:true},
    "idMoto":Number,
    "idCliente":Number
})

export default mongoose.model("reservations", reservationModel)