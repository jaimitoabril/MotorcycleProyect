import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
    "idReservacion":Number,
    "fechaInicio":String,
    "fechaDevolucion":String,
    "idMoto":Number,
    "idCliente":Number
})

export default mongoose.model("reservations", reservationModel)