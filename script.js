// https://www.youtube.com/watch?v=wZZyhrJxZRU
function square(select) {
  /* pixelBoard.style.setProperty('--select', select); */
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < select * select; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}
square(5);

function add_remover(novo_selecionado) {
  const elemento_selecionado = document.getElementsByClassName('selected');
  elemento_selecionado[0].classList.remove('selected');
  novo_selecionado.classList.add('selected');
}

function paletaDeCores(elementSelecionado) {
  /* console.log(elementSelecionado.style); */
  const corPaletaSelecionada = document.getElementsByClassName('selected');
  const objetoSelecionado = corPaletaSelecionada[0];
  /* console.log(objetoSelecionado.classList); */

  let classe = objetoSelecionado.classList.value;
  classe = classe
    .replace('selected', '')
    .replace('color', '')
    .replace(/\s/g, '');
  elementSelecionado.classList.add(classe);
  /* console.log(elementSelecionado); */
}

const div = document.getElementsByTagName('div');
for (let i = 0; i < div.length; i += 1) {
  div[i].onclick = function (elemento) {
    paletaDeCores(elemento.target);
  };
}

const apagar = document.getElementById('clear-board');

//https://stackoverflow.com/questions/36396497/get-all-items-that-start-with-class-name
function apagando() {
  let potentials = document.querySelectorAll("[class*=pixel]");//puxando todas as classes que tem pixel no nome.O * é para buscar em qualquer parte do elemento
//console.log(potentials)
  for (let i = 0; i < potentials.length; i += 1) {
   potentials[i].className= 'pixel'
    console.log(potentials[i]);
  }
}
apagar.addEventListener('click', apagando);
