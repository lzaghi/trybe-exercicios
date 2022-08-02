const botaoDark = document.getElementById('dark');

function atribuiFundo() {
  let tagBody = document.body;
  let corFundo = JSON.parse(localStorage.getItem('fundo'));
  
  tagBody.style.backgroundColor = corFundo[0]
}

function atribuiCorLetra() {
  let tagBody = document.body;
  let corLetra = JSON.parse(localStorage.getItem('corLetra'));
  
  tagBody.style.color = corLetra[0]
}

function modoEscuroStorage() {
  let tagBody = document.body;

  if (tagBody.style.backgroundColor != 'white' || tagBody.style.color != 'black') {
    // tagBody.style.backgroundColor = 'white'
    let corFundo = JSON.parse(localStorage.getItem('fundo'));
    corFundo[0] = 'white'
    localStorage.setItem('fundo', JSON.stringify(corFundo));

    // tagBody.style.color = 'black'
    let corLetra = JSON.parse(localStorage.getItem('corLetra'));
    corLetra[0] = 'black'
    localStorage.setItem('corLetra', JSON.stringify(corLetra));

    atribuiFundo();
    atribuiCorLetra();
  }
  else {
    // tagBody.style.backgroundColor = '#333'
    let corFundo = JSON.parse(localStorage.getItem('fundo'));
    corFundo[0] = '#333'
    localStorage.setItem('fundo', JSON.stringify(corFundo));

    // tagBody.style.color = 'lightgray'
    let corLetra = JSON.parse(localStorage.getItem('corLetra'));
    corLetra[0] = 'lightgray'
    localStorage.setItem('corLetra', JSON.stringify(corLetra));

    atribuiFundo();
    atribuiCorLetra();
  }

}

function initialFundo() {
  if (localStorage.getItem('fundo') === null) {
    localStorage.setItem('fundo', JSON.stringify([]));
  }
  else {
    atribuiFundo();
  }
}

function initialCorLetra() {
  if (localStorage.getItem('corLetra') === null) {
    localStorage.setItem('corLetra', JSON.stringify([]));
  }
  else {
    atribuiCorLetra();
  }
}

botaoDark.addEventListener('click', modoEscuroStorage)

window.onload = function () {
  initialFundo();
  initialCorLetra();
}
