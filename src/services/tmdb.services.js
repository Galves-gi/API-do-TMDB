import { HEADER_TMDB } from "../server.js";

export async function getLancamentoCartaz() {
    const dadosLancamentos  = await HEADER_TMDB.get("/movie/now_playing")
    return dadosLancamentos.data // Sem desestruturação
}

export async function getMaisVotados() {
    const { data: dadosMaisVotados } = await HEADER_TMDB.get("/movie/top_rated")
    return dadosMaisVotados // desestruturação nomeada
}

export async function getFuturoLancamento() {
    const { data } = await HEADER_TMDB.get("/movie/upcoming")
    return data //pegando uma chave que existe na api -> data
}

export async function getInformacoesFilme(id) {
    const { data } = await HEADER_TMDB.get(`/movie/${id}`)
    return data.title // O service só faz a chamada e devolve o resultado
}

export async function getPesquisarFilme(pesquisa) {
    const { data } = await HEADER_TMDB.get(`/movie/${encodeURIComponent(pesquisa)}`)
    return data.title
}

export async function getDetalhesColecao(pesquisaColecao) {
    const { data } = await HEADER_TMDB.get(`movie/pesquisaColecao`)
    return data
}