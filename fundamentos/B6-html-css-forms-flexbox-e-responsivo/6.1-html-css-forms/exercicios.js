// const botaoSubmit = document.getElementById('botao-enviar')

// botaoSubmit.addEventListener('click', function(event) {
//   event.preventDefault()
//   checaValidade()
// })


// const checkImagens = document.getElementById('check-2')

// checkImagens.addEventListener('change', function() {
//   botaoSubmit.disabled = !checkImagens.checked
// })



// const nome = document.getElementById('nome-completo')
// const email = document.getElementById('e-mail')
// const texto = document.getElementById('text')



// const tamanhoNome = nome.value.length;
// const tamanhoEmail = email.value.length;
// const tamanhoTexto = texto.value.length;

// const invalidName = tamanhoNome < 10 || tamanhoNome > 40
// const invalidEmail = tamanhoEmail < 10 || tamanhoEmail > 50
// const invalidText = tamanhoTexto > 500

// function checaValidade() {
//   if (invalidName || invalidEmail || invalidText) {
//     alert('Dados inválidos')
//   }
//   else {
//     alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
//   }
// }

function inputValidation() {
  const nome = document.getElementById('nome-completo').value.length;
  const email = document.getElementById('e-mail').value.length;
  const texto = document.getElementById('text').value.length;

  const invalidName = nome < 10 || nome > 40
  const invalidEmail = email < 10 || email > 50
  const invalidText = texto > 500

  if (invalidName || invalidEmail || invalidText) {
    return false
  }
  else {
    return true
  }
}

function handleSubmit(event) {
  event.preventDefault()

  const valid = inputValidation();
  if (valid === false) {
    alert('Dados inválidos')
  }
  else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }
}

function enableSubmit() {
  const botaoSubmit = document.getElementById('botao-enviar')
  const checkImagens = document.getElementById('check-2')
  botaoSubmit.disabled = !checkImagens.checked
}


window.onload = function() {
  const botaoSubmit = document.getElementById('botao-enviar')
  botaoSubmit.addEventListener('click', handleSubmit)

  const checkImagens = document.getElementById('check-2')
  checkImagens.addEventListener('change', enableSubmit)
}
