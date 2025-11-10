import { criarCaminhoImg } from "./caminho_imagem.js";

export function formatarRetornoFilme(filme){
    const separarLista = Array.isArray(filme?.results) ? filme.results : Array.isArray(filme) ? filme : [filme]
    
    return separarLista.map(filme =>({
        id: filme.id,
        titulo: filme.title,
        descricao: filme.overview,
        urlImagem: criarCaminhoImg(filme.poster_path),
        media_votacao: filme.vote_average,
        data_de_lançamento: filme.release_date
    }))
}
