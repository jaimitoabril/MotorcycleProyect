import mongoose from "mongoose";

const clientModel = mongoose.Schema({
    "idCliente":{type:Number, required:true, unique: true},
    "email":{type:String, required:true},
    "nombre":{type:String, required:true},
    "edad":{type:Number, required:true},
    "idMensaje":Number,
    "idReservacion":Number
})


export default mongoose.model("customers", clientModel)