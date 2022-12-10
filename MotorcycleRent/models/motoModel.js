import mongoose from "mongoose";

const motoModel = mongoose.Schema({
    "llave":Number,
    "nombre":String,
    "marca":String,
    "modelo":Number,
    "descripcion":String

})

export default mongoose.model("motorcycles", motoModel)