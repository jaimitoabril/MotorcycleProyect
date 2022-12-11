//CRUD

import categoryModel from "../models/categoryModel.js"

//post

export async function createCategory(req, res){
    
    const {idCategoria, nombre, descripcion, idMoto}= req.body.categoria
    
   const categoriaD = await categoryModel.create({  
        idCategoria,
        nombre,
        descripcion,
        idMoto
     })
     
     res.status(201).json(categoriaD)
    
}

// get

export function readCategory(res){
    //implementacion
    res.sendStatus(200)
}

// patch
export function updateCategory(res){
    //implementacion
    res.sendStatus(200)
}

//delete

export function deleteCategory(res){
    //implementacion
    res.sendStatus(200)
}


