import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js";

const clientRouter = express.Router()

//POST

clientRouter.post("/",(req,res) =>{
    createClient(req, res)
});

//GET

clientRouter.get("/:idCliente",(req,res) =>{
    readClient(req, res)    
});

// PATCH

clientRouter.patch("/:idCliente",(req,res) =>{
    updateClient(req, res)
});

//DELETE

clientRouter.delete("/:idCliente",(req,res) =>{
    deleteClient(req, res)
});

export default clientRouter