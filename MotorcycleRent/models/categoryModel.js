import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
    "idCategoria":{type:Number, required:true, unique:true},
    "nombre":{type:String, required:true},
    "descripcion":{type:String, required:true},
    "idMoto":Number

})

export default mongoose.model("categories", categoryModel)