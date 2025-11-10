import { Router } from "express";
import { 
    maisVotadosControllers,
    futuroLancamentoControllers,
    informacoesFilmeControllers,
    pesquisarFilmeControllers,
    detalhesColecaoControllers,
    lancamentoCartazControllers,
 } from "../controllers/movies_controller.js";

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
router.get("/pesquisa" , pesquisarFilmeControllers)

//detalhes da coleção
router.get("/detalhes_colecao/:pesquisaColecao" ,detalhesColecaoControllers)



// quando terminar
// lista favoritos localstorage
// simulado com login
