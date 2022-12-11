import express from "express";
import { createReservation, deleteReservation, readReservation, updateReservation } from "../controllers/ReservationController.js";

const reservationRouter = express.Router()

//POST

reservationRouter.post("/",(req,res) =>{
    createReservation(req, res)
});

//GET

reservationRouter.get("/",(req,res) =>{
    readReservation(req, res)    
});

// PATCH

reservationRouter.patch("/",(req,res) =>{
    updateReservation(req, res)
});

//DELETE

reservationRouter.delete("/",(req,res) =>{
    deleteReservation(req, res)
});

export default reservationRouter