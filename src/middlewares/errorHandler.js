export function errorHandler(erro, req, res, next){
    console.log("passou pelo middlewares");
    
    console.error("ERRO:", erro.message);

    res.status(erro.status || 500).json({
        status:erro.status,
        mensagem:erro.message || "Erro no servidor!"
    }) 
}