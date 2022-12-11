import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js";

const clientRouter = express.Router()

//POST

clientRouter.post("/",(req,res) =>{
    createClient(req, res)
});

//GET

clientRouter.get("/",(req,res) =>{
    readClient(req, res)    
});

// PATCH

clientRouter.patch("/",(req,res) =>{
    updateClient(req, res)
});

//DELETE

clientRouter.delete("/",(req,res) =>{
    deleteClient(req, res)
});

export default clientRouter