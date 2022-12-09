import  express  from "express";
import categoryRouter from "./routes/categoryRouter.js";
import clientRouter from "./routes/clientRouter.js";
import messageRouter from "./routes/messageRouter.js";
import motoRouter from "./routes/motoRouter.js";
import reservationRouter from "./routes/reservationRouter.js";


const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("el servidor se esta ejecutando");
})

//Middlware

app.use(express.json())
app.use("/client",clientRouter)
app.use("/category",categoryRouter)
app.use("/message",messageRouter)
app.use("/moto",motoRouter)
app.use("/reservation",reservationRouter)

