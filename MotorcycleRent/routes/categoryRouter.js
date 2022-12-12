import express from "express";
import { createCategory, deleteCategory, readCategory, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router()

//POST

categoryRouter.post("/",(req, res) =>{
    createCategory(req, res)
});

//GET

categoryRouter.get("/:idCategoria",(req, res) =>{
    readCategory(req, res)    
});

// PATCH

categoryRouter.patch("/:idCategoria",(req, res) =>{
    updateCategory(req, res)
});

//DELETE

categoryRouter.delete("/:idCategoria",(req, res) =>{
    deleteCategory(req, res)
});

export default categoryRouter