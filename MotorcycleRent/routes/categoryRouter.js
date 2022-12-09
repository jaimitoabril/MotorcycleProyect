import express from "express";
import { createCategory, deleteCategory, readCategory, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router()

//POST

categoryRouter.post("/",(req,res) =>{
    createCategory(res)
});

//GET

categoryRouter.get("/",(req,res) =>{
    readCategory(res)    
});

// PATCH

categoryRouter.patch("/",(req,res) =>{
    updateCategory(res)
});

//DELETE

categoryRouter.delete("/",(req,res) =>{
    deleteCategory(res)
});

export default categoryRouter