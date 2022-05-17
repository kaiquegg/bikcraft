// Barra de navegação ativa
const links = document.querySelectorAll(".header-menu a");

function navBar(link) {
  url = location.href;
  href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(navBar);

// Itens do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProdutos);

// Pergunas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Imagens

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function imagensTroca(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 800px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function trocaGaleria(img) {
  img.addEventListener("click", imagensTroca);
}

galeria.forEach(trocaGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
