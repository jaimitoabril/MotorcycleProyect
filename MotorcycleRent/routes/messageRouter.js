import express from "express";
import { createMessage, deleteMessage, readMessage, updateMessage } from "../controllers/MessageController.js";

const messageRouter = express.Router()

//POST

messageRouter.post("/",(req,res) =>{
    createMessage(res)
});

//GET

messageRouter.get("/",(req,res) =>{
    readMessage(res)    
});

// PATCH

messageRouter.patch("/",(req,res) =>{
    updateMessage(res)
});

//DELETE

messageRouter.delete("/",(req,res) =>{
    deleteMessage(res)
});

export default messageRouter