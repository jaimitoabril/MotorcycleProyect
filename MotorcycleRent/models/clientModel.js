import mongoose from "mongoose";

const clientModel = mongoose.Schema({
    "idCliente":Number,
    "email":String,
    "nombre":String,
    "edad":Number,
    "idMensaje":Number,
    "idReservacion":Number
})

export default mongoose.model("customers", clientModel)