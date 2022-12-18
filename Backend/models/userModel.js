import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
    "idUsuario":{type:Number, required:true, unique: true},
    "nombre":{type:String, required:true},
    "password":{type:String, required:true},
})

export default mongoose.model("users", categoryModel)