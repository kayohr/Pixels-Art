let elementLi = document.querySelectorAll('li');

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

function add_remover(novo_selecionado){
  let elemento_selecionado=document.getElementsByClassName('selected');
elemento_selecionado[0].classList.remove('selected');
novo_selecionado.classList.add('selected');
}



/*function add_remover(alteracaoDeItem) {
  let cores = document.getElementsByClassName('color');
  for (let i = 0; i < cores.length; i += 1) {
    if (cores[i].classList.contains('selected')) {
      cores[i].classList.remove('selected');
    } else {
      alteracaoDeItem.classList.add('selected');
    }
  }
}
add_remover();*/
