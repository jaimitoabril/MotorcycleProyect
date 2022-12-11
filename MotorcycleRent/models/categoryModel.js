import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
    "idCategoria":Number,
    "nombre":String,    
    "descripcion":String,
    "idMoto":Number

})

export default mongoose.model("categories", categoryModel)