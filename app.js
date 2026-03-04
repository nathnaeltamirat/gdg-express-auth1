import express from "express"
import { PORT } from "./config/env.js"
import connectToDatabase from "./database/database.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import authRouter from "./routes/auth.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/v1/auth",authRouter)
app.use(errorMiddleware)
app.listen(5500,()=>{
    connectToDatabase();
    console.log(`Server is listening on port ${PORT}`)
})