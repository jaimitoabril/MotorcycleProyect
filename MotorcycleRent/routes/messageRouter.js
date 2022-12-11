import express from "express";
import { createMessage, deleteMessage, readMessage, updateMessage } from "../controllers/MessageController.js";

const messageRouter = express.Router()

//POST

messageRouter.post("/",(req,res) =>{
    createMessage(req, res)
});

//GET

messageRouter.get("/",(req,res) =>{
    readMessage(req, res)    
});

// PATCH

messageRouter.patch("/",(req,res) =>{
    updateMessage(req, res)
});

//DELETE

messageRouter.delete("/",(req,res) =>{
    deleteMessage(req, res)
});

export default messageRouter