// VARIAVEIS
// const myName = "Lucca"
// const birthCity = "Guaranésia"
// let birthYear = "1997"

// birthYear = 2030
// birthCity = "Guaxupé"

// console.log(myName)
// console.log(birthCity)
// console.log(birthYear)

// TIPOS PRIMITIVOS E OPERADORES CONDICIONAIS
// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)
// console.log(typeof isEnrolled)
// console.log(typeof patientInfo)
// console.log(typeof patientEmail)

// console.log(typeof patientAge)


// const base = 5;
// const height = 8;

// const area = base * height;

// console.log(base)
// console.log(height)
// console.log(area)

// const perimeter = (base*2) + (height*2);

// console.log(perimeter)

// OPERADORES LÓGICOS
// const nota = 2

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!")
// } else if (nota < 80 && nota >= 60) {
//   console.log("Você está na nossa lista de espera :)")
// } else if (nota < 60) {
//   console.log("Você foi reprovada(o) :(")
// }

// OPERADORES LOGICOS
// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);


// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(listaDeCompras);

// const currentHour = 20;
// let message = "";

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir"
// } 
// else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D"
// } 
// else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café da tarde?"
// }
// else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço!!!"
// } 
// else if (currentHour >= 4 && currentHour < 11) {
//   message = "Hmmm, cheiro de café recém passado"
// }

// console.log(message);

// let weekDay = "domingo"

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay ===  "quarta-feira" || weekDay ===  "quinta-feira" || weekDay === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// }
// else if (weekDay === "sábado" || weekDay === "domingo") {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

let resultado = "aprovada";

switch (resultado) {
  case "aprovada":
    console.log("aprovada");
    break;
  
  case "lista":
    console.log("lista");
    break;

  case "reprovada":
    console.log("reprovada");
    break;

  default:
    console.log("não se aplica");
}