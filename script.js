//https://www.youtube.com/watch?v=wZZyhrJxZRU
function square(select) {
  /*pixelBoard.style.setProperty('--select', select);*/
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < select * select; i += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}
square(5);

function add_remover(novo_selecionado) {
  let elemento_selecionado = document.getElementsByClassName('selected');
  elemento_selecionado[0].classList.remove('selected');
  novo_selecionado.classList.add('selected');
}

function paletaDeCores(elementSelecionado) {
  console.log(elementSelecionado.style);
  let corPaletaSelecionada = document.getElementsByClassName('selected');
  let objetoSelecionado = corPaletaSelecionada[0];
  console.log(objetoSelecionado.classList);

  let classe = objetoSelecionado.classList.value;
  classe = classe
    .replace('selected', '')
    .replace('color', '')
    .replace(/\s/g, '');
  elementSelecionado.classList.add(classe);
  console.log(elementSelecionado);
}

let div = document.getElementsByTagName('div');
for (let i = 0; i < div.length; i += 1) {
  div[i].onclick = function (elemento) {
    paletaDeCores(elemento.target);
  };
}


/*let apagar = document.getElementById('clear-board');
apagar.addEventListener('click', function () {
  let pixelBoard = document.querySelector('#pixel-board');
  let pixel = document.getElementsByClassName('pixel');
  pixelBoard.innerText = '';
  square(pixelBoard);
});*/

//div.addEventListener('click', paletaDeCores(this));
//ler o valor do input, fazer as validações necessarias
//chamar a funcao square passando o valor do input
//como descobrir o valor do input
