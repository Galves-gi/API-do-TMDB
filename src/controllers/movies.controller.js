import { 
    getLancamentoCartaz,
    getMaisVotados,
    getFuturoLancamento,
    getInformacoesFilme,
    getPesquisarFilme,
    getDetalhesColecao} from "../services/tmdb.services.js";

//lançamentos em cartaz
export async function lancamentoCartazControllers(req, res, next) {
    try {
        const dadosLancamentos = await getLancamentoCartaz()
        res.json(dadosLancamentos)
    } catch (error) {
        next(error)
    }
}

// mais votados
export async function maisVotadosControllers(req, res, next) {
    try {
        const dadosMaisVotados = await getMaisVotados()
        res.json(dadosMaisVotados)
    } catch (error) {
        next(error)
    }
}

// futuro lançamentos
export async function futuroLancamentoControllers(req, res, next) {
    try {
        const dadosFuturoLancamentos = await getFuturoLancamento()
        res.json(dadosFuturoLancamentos)
    } catch (error) {
        next(error)
    }
}

// mais informações
export async function informacoesFilmeControllers(req, res, next) {
    try {
        const { id } = req.params
        const dadosInformacoesFilme = await getInformacoesFilme(id)
        res.json(dadosInformacoesFilme)
    } catch (error) {
        next(error)
    }
}

// pesquisar
export async function pesquisarFilmeControllers(req, res, next) {
    try {
        const { buscar } = req.params
        const dadosPesquisarFilme = await getPesquisarFilme(buscar)
        res.json(dadosPesquisarFilme)

    } catch (error) {
        next(error)
    }
}

// mais informações coleção
export async function detalhesColecaoControllers(req, res, next) {
    const { pesquisaColecao } = req.params
    try {
        const dadosDetalhesColecao = await getDetalhesColecao(pesquisaColecao)
        res.json(dadosDetalhesColecao)
    } catch (error) {
        next(error)
    }
}
