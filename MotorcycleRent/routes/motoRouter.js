import express from "express";
import { createMoto, deleteMoto, readMoto, updateMoto } from "../controllers/MotoController.js";

const motoRouter = express.Router()

//POST

motoRouter.post("/",(req,res) =>{
    createMoto(res)
});

//GET

motoRouter.get("/",(req,res) =>{
    readMoto(res)    
});

// PATCH

motoRouter.patch("/",(req,res) =>{
    updateMoto(res)
});

//DELETE

motoRouter.delete("/",(req,res) =>{
    deleteMoto(res)
});

export default motoRouter