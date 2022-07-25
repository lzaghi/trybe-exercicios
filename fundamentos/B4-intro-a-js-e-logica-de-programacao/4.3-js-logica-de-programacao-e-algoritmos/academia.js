
//    https://github.com/tryber/academia-de-logica/blob/main/Dia4.3/script.js

//                              EXERCICIO 1
// let array = [3, 17, 9, 57, 90, 10]
// let valor = 3
// let index;

// for (let i = 0; i < array.length; i += 1) {
//   if (valor === array[i]) {
//     index = i
//     console.log("o índice do valor é :", index);
//   }
  
// }

// if (index === undefined) {
//   console.log("elemento não encontrado no array");
// }


//                            EXERCICIO 2
// let string = "";

// for (let i = 1; i <= 50; i += 1) {
//   if (i % 2 !== 0) {
//     string += ", " + i
//   }
// }

// let novaString = "";

// for (let j = 2; j < string.length; j += 1) {
//   novaString += string[j]
// }

// console.log(novaString);


//                          EXERCICIO 3
let valorInicial = 14;
let valorFinal = 670;

let sequencia = [];

for (let i = valorInicial; i <= valorFinal; i += 1) {
  if (i % 3 === 0) {
    sequencia.push(i);
  }
}
console.log(sequencia);
if (sequencia.length >= 50) {
  console.log("Há 50 ou mais números divisíveis por 3");
}
else {
  console.log("Sequência muito pequena");
}