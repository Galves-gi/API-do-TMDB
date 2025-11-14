# API do TMDB

Uma API Node.js que integra com The Movie Database (TMDB) para fornecer informações sobre filmes, incluindo detalhes e imagens.

## 🚀 Sobre o Projeto

Esta é uma API REST construída com Express.js que funciona como intermediária para consumir dados da TMDB. Inclui autenticação via API Key, proteção contra abuso com rate limiting, tratamento de erros centralizado e segurança básica.

## 📋 Requisitos

- Node.js (versão 14+)
- npm ou yarn
- Uma chave de API válida do TMDB (obtida em [https://www.themoviedb.org/api](https://www.themoviedb.org/api))

## 💻 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Galves-gi/api-API-do-TMDB.git
   cd api-do-tmdb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto:
   ```
   TMDB_TOKEN=sua_chave_aqui
   PORT=8080
   ```

## 🏃 Como Executar

Para iniciar o servidor em modo desenvolvimento com auto-reload:

```bash
npm start
```

O servidor estará disponível em `http://localhost:8080`

## 📁 Estrutura do Projeto

```
├── src/
│   ├── server.js                 # Arquivo principal da aplicação
│   ├── config/
│   │   ├── cors.js              # Configuração CORS
│   │   └── tmdb.js              # Configuração TMDB
│   ├── controllers/
│   │   └── movies_controller.js # Lógica dos endpoints de filmes
│   ├── middlewares/
│   │   ├── errorHandler.js      # Tratamento centralizado de erros
│   │   └── rateLimit.js         # Limitador de requisições
│   ├── routes/
│   │   └── movies_routes.js     # Definição das rotas
│   ├── services/
│   │   └── tmdb_services.js     # Chamadas à API TMDB
│   └── utils/
│       ├── caminho_imagem.js    # Formatação de URLs de imagens
│       └── formatar_retorno_filmes.js # Formatação de dados
├── public/
├── package.json
├── .env                         # Variáveis de ambiente
└── README.md
```

## 🔌 Endpoints Disponíveis

### 🎬 Lançamentos em Cartaz
- **GET** `/lancamento_cartaz`
- **Descrição:** Retorna filmes em cartaz no momento
- **Exemplo:** `http://localhost:8080/lancamento_cartaz`

### ⭐ Filmes Mais Votados
- **GET** `/mais_votados`
- **Descrição:** Retorna os filmes com as melhores avaliações
- **Exemplo:** `http://localhost:8080/mais_votados`

### 🚀 Futuros Lançamentos
- **GET** `/futuro_lancamento`
- **Descrição:** Retorna filmes que serão lançados em breve
- **Exemplo:** `http://localhost:8080/futuro_lancamento`

### 🔍 Informações Detalhadas do Filme
- **GET** `/informacoes_filme/:id`
- **Descrição:** Retorna detalhes completos de um filme específico
- **Parâmetro:** `id` - ID do filme no TMDB
- **Exemplo:** `http://localhost:8080/informacoes_filme/550`

### 🔎 Pesquisa por Texto
- **GET** `/pesquisa`
- **Descrição:** Pesquisa filmes por título ou palavra-chave
- **Query Params:** `query` - Termo de busca
- **Exemplo:** `http://localhost:8080/pesquisa?query=Homem%20Aranha`

### 📚 Detalhes da Coleção
- **GET** `/detalhes_colecao/:pesquisaColecao`
- **Descrição:** Retorna informações sobre uma coleção de filmes
- **Parâmetro:** `pesquisaColecao` - Nome da coleção
- **Exemplo:** `http://localhost:8080/detalhes_colecao/Star%20Wars`

## 🧪 Testando a API

Como esta é uma **API Backend** sem frontend integrado, você pode testar os endpoints usando:

### 🌐 Navegador (para requisições GET)

Simplesmente coloque a URL na barra de endereços:
```
http://localhost:8080/lancamento_cartaz
http://localhost:8080/mais_votados
http://localhost:8080/futuro_lancamento
http://localhost:8080/informacoes_filme/550
http://localhost:8080/pesquisa?query=Homem%20Aranha
```

### 📮 Postman

1. [Baixe o Postman](https://www.postman.com/downloads/)
2. Abra uma nova requisição
3. Selecione o método **GET**
4. Cole a URL desejada
5. Clique em **Send**

**Exemplo no Postman:**
```
GET http://localhost:8080/lancamento_cartaz
```

### 💻 cURL (Terminal)

```bash
# Lançamentos em cartaz
curl http://localhost:8080/lancamento_cartaz

# Filmes mais votados
curl http://localhost:8080/mais_votados

# Buscar filme específico
curl http://localhost:8080/informacoes_filme/550

# Pesquisar por termo
curl "http://localhost:8080/pesquisa?query=Homem%20Aranha"
```

## 🛡️ Segurança

A aplicação implementa:

- **CORS**: Controla acesso entre domínios
- **Rate Limiting**: Limita requisições por IP para prevenir abuso e ataques DoS
- **XSS Protection**: Proteção contra ataques XSS (descomentado em server.js)

## 🔧 Dependências

- **express**: Framework web
- **axios**: Cliente HTTP para chamadas à TMDB
- **cors**: Middleware CORS
- **dotenv**: Carregamento de variáveis de ambiente
- **express-rate-limit**: Limitador de requisições
- **xss**: Prevenção de XSS
- **nodemon**: Auto-reload em desenvolvimento

## 📝 Variáveis de Ambiente

```
TMDB_TOKEN # Chave de autenticação da TMDB (obrigatório)
```

## 🐛 Tratamento de Erros

A API implementa um middleware centralizado de tratamento de erros que retorna:

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Descrição do erro"
}
```

## 📄 Licença

ISC

## 📧 Autor

Galves-gi

## 🔗 Links Úteis

- [Documentação TMDB API](https://developer.themoviedb.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [GitHub Repositório](https://github.com/Galves-gi/api-API-do-TMDB)

## 💡 Próximos Passos
- Conectar com Front-End
- Implementar autenticação de usuários
- Adicionar cache de dados
- Criar testes automatizados
- Documentar endpoints com Swagger/OpenAPI
