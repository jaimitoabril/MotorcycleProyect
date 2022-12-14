import mongoose from "mongoose";

const motoModel = mongoose.Schema({

    "idMoto":{type:Number, required:true, unique:true}, 
    "nombre":{type:String, required: true}, 
    "marca":{type:String, required: true}, 
    "modelo":{type:Number, required: true}, 
    "descripcion":{type:String, required: true}, 
    "idCategoria":Number
     
})

export default mongoose.model("motorcycles", motoModel)