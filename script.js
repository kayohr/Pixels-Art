let pixelBoard = document.querySelector('#pixel-board');

function square(select) {
  /*pixelBoard.style.setProperty('--select', select);*/
  for (let i = 0; i < select * select; i += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}
square(5);
