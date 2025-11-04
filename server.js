/* 
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static("public"));


// Rota: buscar um filme por ID
app.get("/filme/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resposta = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );
    
    res.json(resposta.data);
    

  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Erro ao buscar dados da API" });
  }
});

app.listen(3000, () => {
  //console.log("Servidor rodando em http://localhost:3000/");
  console.log("Servidor iniciado");
});

//console.log("Token:", process.env.TMDB_TOKEN); funcionou */




import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.TMDB_URL

const consumoApi = async (id=11)=>{`${url}${id}`;

    const resposta = await axios.get(url,
    {
      headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
       },
    }
    
  );
  console.log(resposta.data);
  
  //console.log(resposta.data.title)
}
consumoApi()

/* async function filmesPopulares() {
  
} */