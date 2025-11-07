import { Router } from "express";
import { 
    maisVotadosControllers,
    futuroLancamentoControllers,
    informacoesFilmeControllers,
    pesquisarFilmeControllers,
    detalhesColecaoControllers,
    lancamentoCartazControllers,
 } from "../controllers/movies.controller.js";

export const router = Router()

// lançamentos em cartaz
router.get("/lancamento_cartaz", lancamentoCartazControllers)

//mais votados
router.get("/mais_votados" , maisVotadosControllers)

// futuros lançamentos
router.get("/futuro_lancamento" ,futuroLancamentoControllers)

// detalhes do filme
router.get("/informacoes_filme/:id" , informacoesFilmeControllers)

// pesquisa por texto
router.get("/pesquisa/:buscar" , pesquisarFilmeControllers)

//detalhes da coleção
router.get("/detalhes_colecao/:pesquisaColecao" ,detalhesColecaoControllers)


























//retornar os lançamentos
router.get("/lancamento", async(req,res,next)=>{
    try {
        const retornoLancamento = await HEADER_TMDB.get(`/movie/now_playing?language=pt-br`)
        const tituloLancamento = retornoLancamento.data.results.map(cada_filme => cada_filme.title)
        res.json(tituloLancamento)
    } catch (error) {
        next(error)
    }
})

// retornar os filmes populares
router.get("/popular", async(req,res)=>{
  const retornoPopular = await HEADER_TMDB.get(`/movie/popular?language=pt-br`)
  const tituloPopular = retornoPopular.data.results.map(cada_filme => cada_filme.title)
  res.json(tituloPopular)
})

// retornar os bem avaliados /movie/top_rated
router.get("/top", async(req,res)=>{
    const retornoTop = await HEADER_TMDB.get(`/movie/top_rated?language=pt-br`)
    res.json(retornoTop.data.results)
})

// retornar os lancamentos futuros /movie/upcoming
router.get("/cartaz", async(req,res)=>{
    const retornoCartaz = await HEADER_TMDB.get(`/movie/upcoming`)
    res.json(retornoCartaz.data.results)
})

// retornar a coleção na pagina mais sobre o filme quando for true

//pegar por nome / pesquisa

// mostrar no html

// pegar por ID
router.get("/filme/:id", async(req, res, next)=>{
    const { id } = req.params
    try {
        const retorno = await HEADER_TMDB.get(`/movie/${id}`)
        res.json(retorno.data.title)
    } catch (error) {
        next(error)
    }

})



router.get(`/test`,(req,res,next)=>{
    try {
        throw new Error(`falhou no ${req.originalUrl}`);
        
       /*  res.json({mensagem:`rota teste funcionando!`}) */
    } catch (error) {
        next(error)
    }
})

router.post(`/create`,(req,res)=>{
    const name = req.body.name // tudo que vem 

    res.json({mensagem:`rota create ok ${name}`})
})



// quando terminar
// lista favoritos localstorage
// simulado com login
