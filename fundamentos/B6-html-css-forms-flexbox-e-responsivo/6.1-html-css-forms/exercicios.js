const botaoSubmit = document.getElementById('botao-enviar')

botaoSubmit.addEventListener('click', function(event) {
  event.preventDefault()
  // alert('infos enviadas c:')
})


const paiBotao = document.getElementById('field')

const botaoClear = document.createElement('button')
botaoClear.innerHTML = 'Limpar informações'

paiBotao.appendChild(botaoClear)


const nome = document.getElementById('nome-completo')
const email = document.getElementById('e-mail')
const texto = document.getElementById('text')
// const data = document.getElementById('data')

// botaoClear.addEventListener('click', function() {
//   nome.value = '';
//   email.value = '';
//   texto.value = '';
//   data.value = '';
// })


const tamanhoNome = nome.value.length;
const tamanhoEmail = email.value.length;
const tamanhoTexto = texto.value.length;


botaoSubmit.addEventListener('click', function() {
  if (tamanhoNome < 10) {
    alert('Dados inválidos')
  }
  else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }
})
