function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Crie um calendário dinamicamente.
// <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
function createDaysOfTheMonth() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let monthDaysList = document.querySelector('#days')

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let days = decemberDaysList[i];
    let dayListItem = document.createElement('li');
    
    dayListItem.innerHTML = days;

    if (days === 25) {
      dayListItem.className = 'day holiday friday';
    }else if (days === 24 || days === 31) {
      dayListItem.className = 'day holiday';
    }
    else if (days === 4 || days === 11 || days === 18) {
      dayListItem.className = 'day friday';
    }
    else {
      dayListItem.className = 'day'
    }

    monthDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth()

// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
const divBotao = document.querySelector('.buttons-container')

function criaBotao(string) {
  const botao = document.createElement('button');
  botao.id = "btn-holiday";
  botao.innerHTML = string

  divBotao.appendChild(botao);
}

criaBotao("Feriados")

