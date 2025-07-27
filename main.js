import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionarItem)

atualizarLista();

function atualizarLista() {
  olItens.innerHTML = "";
  let lista = getLista();

  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement('li');
    li.textContent = lista[i];
    olItens.appendChild(li);
  }
}

function limparItensDeLista() {
  limpaLista();
  atualizarLista();  
}

function adicionarItem() {
  const item = pEntrada.textContent.trim();
  pEntrada.textContent = "";
  adicionaNaLista(item);
  atualizarLista();
}