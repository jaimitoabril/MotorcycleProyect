//CRUD

import categoryModel from "../models/categoryModel.js"

//post

export async function createCategory(req, res){
    
    const categoria = req.body.categoria

    let categoriaDoc 

    try {
        categoriaDoc = await categoryModel.create(categoria)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }    
     
    res.status(201).json(categoriaDoc)
    
}

// get

export async function readCategory(req, res){
    
    const idCategoria = req.params.idCategoria

    let categoriaDoc

    try {
        categoriaDoc = await categoryModel.findOne({idCategoria})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }   

    res.status(200).json(categoriaDoc)
}

// patch
export async function updateCategory(req, res){
    
    const idCategoria = req.params.idCategoria
    const updates = req.body.updates
    

    let categoriaDoc

    try {
        categoriaDoc = await categoryModel.updateOne({idCategoria},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }  

    res.status(200).json(categoriaDoc)
    
}

//delete

export async function deleteCategory(req, res){
    const idCategoria = req.params.idCategoria

    let categoriaDoc

    try {
        categoriaDoc = await categoryModel.deleteOne({idCategoria})
    } catch (error) {
        res.status(400).json(error.message)
        return
        
    }   

    res.status(200).json(categoriaDoc)
}


