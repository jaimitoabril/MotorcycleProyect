import express from "express";
import { createReservation, deleteReservation, readReservation, updateReservation } from "../controllers/ReservationController.js";

const reservationRouter = express.Router()

//POST

reservationRouter.post("/",(req,res) =>{
    createReservation(res)
});

//GET

reservationRouter.get("/",(req,res) =>{
    readReservation(res)    
});

// PATCH

reservationRouter.patch("/",(req,res) =>{
    updateReservation(res)
});

//DELETE

reservationRouter.delete("/",(req,res) =>{
    deleteReservation(res)
});

export default reservationRouter