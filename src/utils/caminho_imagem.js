import { IMAGEM_TMDB } from "../config/tmdb.js";

export function criarCaminhoImg(caminho){
    return caminho ? `${IMAGEM_TMDB}${caminho}` : null
}