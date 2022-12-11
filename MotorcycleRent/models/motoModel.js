import mongoose from "mongoose";

const motoModel = mongoose.Schema({

    "idMoto":Number, 
    "nombre":String, 
    "marca":String, 
    "modelo":Number, 
    "descripcion":String, 
    "idCategoria":Number, 
    "idMensaje":Number, 
    "idReservacion":Number    
})

export default mongoose.model("motorcycles", motoModel)