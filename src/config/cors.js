import  cors  from "cors";

const todosDominios = [
    "http://localhost:8080",
    "https://api-api-do-tmdb.vercel.app/"
]

export const corsTodosDominios = cors({
    origin: todosDominios,
    methods: ["GET"]
})

