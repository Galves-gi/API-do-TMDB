// public/js/main.js
const apiBase = "/api/filmes";

const elCartaz = document.getElementById("cartaz");
const elFuturos = document.getElementById("futuros");
const elMaisVotados = document.getElementById("maisVotados");
const elPesquisa = document.getElementById("pesquisa");
const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");

// helper criar card
/* function criarCard(filme) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${filme.urlImagem || '/img/placeholder.png'}" alt="${filme.titulo}" loading="lazy" />
    <div class="card-body">
      <h3>${filme.titulo}</h3>
      <p>${(filme.descricao || "").slice(0,120)}...</p>
      <small>⭐ ${filme.vote_average?filme.media_votacao || "-"}</small>
    </div>
  `;
  // clique redireciona para details.html?id=ID
  div.addEventListener("click", () => {
    window.location.href = `/details.html?id=${filme.id}`;
  });
  return div;
} */

async function fetchAndRender(endpoint, container) {
  container.innerHTML = "Carregando...";
  try {
    const res = await fetch(endpoint);
    const json = await res.json();
    const items = json.results || [];
    container.innerHTML = "";
    items.forEach(i => container.appendChild(criarCard(i)));
    if (!items.length) container.innerHTML = "<p>Nenhum resultado</p>";
  } catch (err) {
    container.innerHTML = `<p>Erro: ${err.message}</p>`;
  }
}

async function carregarHome() {
  await fetchAndRender(`${apiBase}/lancamento_cartaz`, elCartaz);
  await fetchAndRender(`${apiBase}/futuro_lancamento`, elFuturos);
  await fetchAndRender(`${apiBase}/mais_votados`, elMaisVotados);
}

async function pesquisar(q) {
  if (!q) {
    elPesquisa.innerHTML = "";
    return;
  }
  await fetchAndRender(`${apiBase}/pesquisa?q=${encodeURIComponent(q)}`, elPesquisa);
}

// debounce simples
function debounce(fn, delay = 400) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

inputSearch.addEventListener("input", debounce((e) => pesquisar(e.target.value), 500));
btnSearch.addEventListener("click", () => pesquisar(inputSearch.value));

carregarHome();
