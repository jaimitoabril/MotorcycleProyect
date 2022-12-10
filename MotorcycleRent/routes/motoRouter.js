import express from "express";
import { createMoto, deleteMoto, readMoto, updateMoto } from "../controllers/MotoController.js";

const motoRouter = express.Router()

//POST

motoRouter.post("/",(req,res) =>{
    createMoto(req,res)
});

//GET

motoRouter.get("/",(req,res) =>{
    readMoto(req,res)    
});

// PATCH

motoRouter.patch("/",(req,res) =>{
    updateMoto(req,res)
});

//DELETE

motoRouter.delete("/",(req,res) =>{
    deleteMoto(req,res)
});

export default motoRouter