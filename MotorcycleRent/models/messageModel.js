import mongoose from "mongoose";

const messageModel = mongoose.Schema({
    "idMensaje":Number,
    "mensaje":String,
    "idCliente":Number
    
})

export default mongoose.model("messages", messageModel)