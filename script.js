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


function add_remover() {
  let cores = document.querySelector('color-palette');
  for (let i = 0; i < cores.length - 1; i += 1) {
    if (cores[i] === cores) {
      cores[i].classList.add('selected');
    } else {
      cores[i].classList.remove('selected');
    }
  }
}
/*function selecaoDeCores() {
  for (let i = 0; i < cores.length - 1; i += 1) {
    cores[i].addEventListener('click', () => {
      add_remover[i];
    });
  }
}*/

