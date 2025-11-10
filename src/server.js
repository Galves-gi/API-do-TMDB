import express from "express";
/* import { xss } from "xss";
import { mongoSanitize } from "express-mongo-sanitize"; */
import { limitarUso } from "./middlewares/rateLimit.js";
import { router } from "./routes/movies_routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { corsTodosDominios } from "../src/config/cors.js";

const app = express()

app.use(corsTodosDominios)

app.use(express.json())
app.use(express.static("./public"))

const PORT = 8080

/* app.use(xss())
app.use(mongoSanitize()) */
app.use(limitarUso)

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
