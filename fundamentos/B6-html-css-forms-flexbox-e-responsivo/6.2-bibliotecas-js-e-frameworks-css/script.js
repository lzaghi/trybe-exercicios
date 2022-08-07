// function inputValidation() {
//   const nome = document.getElementById('nome-completo').value.length;
//   const email = document.getElementById('e-mail').value.length;
//   const texto = document.getElementById('text').value.length;

//   const invalidName = nome < 10 || nome > 40
//   const invalidEmail = email < 10 || email > 50
//   const invalidText = texto > 500

//   if (invalidName || invalidEmail || invalidText) {
//     return false
//   }
//   else {
//     return true
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault()

//   const valid = inputValidation();
//   if (valid === false) {
//     alert('Dados inválidos')
//   }
//   else {
//     alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
//   }
// }

function enableSubmit() {
  const botaoSubmit = document.getElementById('botao-enviar')
  const checkImagens = document.getElementById('check-2')
  botaoSubmit.disabled = !checkImagens.checked
}


window.onload = function() {
  // const botaoSubmit = document.getElementById('botao-enviar')
  // botaoSubmit.addEventListener('click', handleSubmit)

  const checkImagens = document.getElementById('check-2')
  checkImagens.addEventListener('change', enableSubmit)
}


document.getElementById('data').DatePickerX.init( {
  mondayFirst: false,
  minDate: Date(2022, 5, 8),
  todayButton: false,
  clearButton: false,
  format: 'dd/mm/yyyy',
});


const validate = new window.JustValidate('#form', 
  {
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  });

validate
  .addField('#nome-completo', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Full name is required'
    },
  ])

  .addField('#e-mail', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  
  .addField('#text', [
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },
  ])

  .addField('#data', [
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },
  ])
  
  