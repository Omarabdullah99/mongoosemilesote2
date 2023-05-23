import express, { Application } from 'express'
import cors from 'cors'

const app:Application=express()

//application route
import userRoutes from './app/modules/user/user.router'

//using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/books", userRoutes)

export default app