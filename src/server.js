import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { router } from "./routes/movies.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config()

const app = express()
const PORT = 5000

app.use(express.json())

export const HEADER_TMDB = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  headers:{
    Authorization:`Bearer ${process.env.TMDB_TOKEN}`
  }
})

app.use(router)

app.use((req, res, next)=>{
  const error = new Error("Rota não encontrada!")
  error.status = 404
  next(error)
})

app.use(errorHandler)

app.listen(PORT, ()=>{
  console.log(`Servidor ligado na porta ${PORT}`);
})
