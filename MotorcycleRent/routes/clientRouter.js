import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js";

const clientRouter = express.Router()

//POST

clientRouter.post("/",(req,res) =>{
    createClient(res)
});

//GET

clientRouter.get("/",(req,res) =>{
    readClient(res)    
});

// PATCH

clientRouter.patch("/",(req,res) =>{
    updateClient(res)
});

//DELETE

clientRouter.delete("/",(req,res) =>{
    deleteClient(res)
});

export default clientRouter