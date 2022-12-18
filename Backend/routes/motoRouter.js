import express from "express";
import { createMoto, deleteMoto, readMoto,readTMoto, updateMoto } from "../controllers/MotoController.js";

const motoRouter = express.Router()

//POST

motoRouter.post("/",(req, res) =>{
    createMoto(req, res)
});

//GET

motoRouter.get("/:idMoto",(req, res) =>{
    readMoto(req, res)    
});

motoRouter.get("/",(req, res) =>{
    readTMoto(req, res)    
});
// PATCH

motoRouter.patch("/:idMoto",(req, res) =>{
    updateMoto(req, res)
});

//DELETE

motoRouter.delete("/:idMoto",(req, res) =>{
    deleteMoto(req, res)
});

export default motoRouter