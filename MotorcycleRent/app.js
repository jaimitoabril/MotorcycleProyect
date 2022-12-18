import cors from "cors";
import mongoose from "mongoose";
import  express  from "express";
import categoryRouter from "./routes/categoryRouter.js";
import clientRouter from "./routes/clientRouter.js";
import messageRouter from "./routes/messageRouter.js";
import motoRouter from "./routes/motoRouter.js";
import reservationRouter from "./routes/reservationRouter.js";
import userRouter from "./routes/userRouter.js";
mongoose.set('strictQuery', false);


const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("el servidor se esta ejecutando");
})

mongoose.connect("mongodb+srv://motorcycleapp:motorcycleapp@clustermotorcycle.5ueazyf.mongodb.net/Motorcycle?retryWrites=true&w=majority",(err)=>{
    if (err){
        console.log(err);
    } else{
        console.log("La base de datos se encuentra conectada")
    }
})

//Middlware

app.use(express.json())
app.use("/user",userRouter)
app.use("/client",clientRouter)
app.use("/category",categoryRouter)
app.use("/message",messageRouter)
app.use("/moto",motoRouter)
app.use("/reservation",reservationRouter)
app.use(cors({
    origin:"http:localhost:3000"
}))

