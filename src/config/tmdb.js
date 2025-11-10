import axios from "axios";
import dotenv from "dotenv";
dotenv.config()


export const HEADER_TMDB = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    language: "pt-BR"
  },
  headers:{
    Authorization:`Bearer ${process.env.TMDB_TOKEN}`,
    Accept: "application/json"
  }
})

export const IMAGEM_TMDB = "https://image.tmdb.org/t/p/w500"