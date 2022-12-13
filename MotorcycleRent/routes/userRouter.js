import express from "express";

import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router()

//POST

userRouter.post("/",(req, res) =>{
    createUser(req, res)
});

//GET

userRouter.get("/:idUsuario",(req, res) =>{
    readUser(req, res)    
});

// PATCH

userRouter.patch("/:idUsuario",(req, res) =>{
    updateUser(req, res)
});

//DELETE

userRouter.delete("/:idUsuario",(req, res) =>{
    deleteUser(req, res)
});

export default userRouter