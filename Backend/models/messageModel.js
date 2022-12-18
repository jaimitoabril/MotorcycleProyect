import mongoose from "mongoose";

const messageModel = mongoose.Schema({
    "idMensaje":{type:Number, required:true, unique:true},
    "mensaje":{type:String, required:true},
    "idCliente":Number
    
})

export default mongoose.model("messages", messageModel)