import { formatarRetornoFilme } from "../utils/formatar_retorno_filmes.js";
import { 
    getLancamentoCartaz,
    getMaisVotados,
    getFuturoLancamento,
    getInformacoesFilme,
    getPesquisarFilme,
    getDetalhesColecao} from "../services/tmdb_services.js";

//lançamentos em cartaz
export async function lancamentoCartazControllers(req, res, next) {
    try {
        const dadosLancamentos = await getLancamentoCartaz()
        
        res.json({resultado: formatarRetornoFilme(dadosLancamentos)})
    } catch (error) {
        next(error)
    }
}

// mais votados
export async function maisVotadosControllers(req, res, next) {
    try {
        const dadosMaisVotados = await getMaisVotados()
        res.json({resultado: formatarRetornoFilme(dadosMaisVotados)})
    } catch (error) {
        next(error)
    }
}

// futuro lançamentos
export async function futuroLancamentoControllers(req, res, next) {
    try {
        const dadosFuturoLancamentos = await getFuturoLancamento()
        res.json({resultado: formatarRetornoFilme(dadosFuturoLancamentos)})
    } catch (error) {
        next(error)
    }
}

// mais informações
export async function informacoesFilmeControllers(req, res, next) {
    try {
        const { id } = req.params
        const dadosInformacoesFilme = await getInformacoesFilme(id)

        return res.json({
            resultado: formatarRetornoFilme(dadosInformacoesFilme),
            creditos: dadosInformacoesFilme.credits,
            video: dadosInformacoesFilme.videos
        })

    } catch (error) {
        next(error)
    }
}

// pesquisar
export async function pesquisarFilmeControllers(req, res, next) {
    try {
        const buscar = req.query.buscar || ""

        if (!buscar) {
            return res.status(400).json({mensagem: `query "buscar" obrigatorio`})
        }

        const retornoBuscar = await getPesquisarFilme(buscar)

        res.json({resultado: retornoBuscar})

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
