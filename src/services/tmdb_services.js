import { HEADER_TMDB } from "../../src/config/tmdb.js";

// lançamento em cartaz
export async function getLancamentoCartaz() {
    const dadosLancamentos  = await HEADER_TMDB.get("/movie/now_playing")
    return dadosLancamentos.data // Sem desestruturação
}
// os filmes mais votados
export async function getMaisVotados() {
    const { data: dadosMaisVotados } = await HEADER_TMDB.get("/movie/top_rated")
    return dadosMaisVotados // desestruturação nomeada
}
// futuro lançamentos
export async function getFuturoLancamento() {
    const { data } = await HEADER_TMDB.get("/movie/upcoming")
    return data //pegando uma chave que existe na api -> data
}
// mais informações do filme
export async function getInformacoesFilme(id) {
    const { data } = await HEADER_TMDB.get(`/movie/${id}?append_to_response=videos,credits,images`)
    return data // O service só faz a chamada e devolve o resultado
}
// pesquisar 
export async function getPesquisarFilme(pesquisa) {
    const { data } = await HEADER_TMDB.get(`/search/movie`,{params:{pesquisa, include_adult: false}})
    return data
}
// pesquisar coleção
export async function getDetalhesColecao(pesquisaColecao) {
    const { data } = await HEADER_TMDB.get(`movie/${pesquisaColecao}`)
    return data
}