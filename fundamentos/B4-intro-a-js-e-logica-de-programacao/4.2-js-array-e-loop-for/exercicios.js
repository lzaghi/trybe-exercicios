
// ARRAY PARA EXERCICIOS 1 A 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//             EXERCICIO 1
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }


//             EXERCICIO 2
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i]
// }

// console.log(sum);


//             EXERCICIO 3
// let sum = 0;
// let media = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i]
// }

// media = sum/numbers.length

// console.log(media);


//             EXERCICIO 4
// let sum = 0;
// let media = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i]
// }

// media = sum/numbers.length

// if (media > 20) {
//   console.log("valor maior que 20");
// }
// else {
//   console.log("valor menor ou igual a 20");
// }


//            EXERCICIO 5
// let maior = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] > maior)
//   maior = numbers[i]
// }

// console.log(maior);


//           EXERCICIO 6
// let counter = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     counter += 1
//   }
// }

// if (counter === 0) {
//   console.log("nenhum valor ímpar encontrado");
// } 
// else {
//   console.log("A quantidade de valores ímpares é: ", counter);
// }


//             EXERCICIO 7
// let menor = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < menor)
//   menor = numbers[i]
// }

// console.log(menor);


//            EXERCICIO 8
// let myArray = [];

// for (let i = 1; i < 26; i++) {
//   myArray.push(i);
// }

// console.log(myArray);


//            EXERCICIO 9
// let myArray = [];

// for (let i = 1; i < 26; i++) {
//   myArray.push(i);
// }

// let myArrayDiv = [];
// for (let j = 0; j < myArray.length; j++) {
//   myArrayDiv.push((myArray[j]/2))
// }

// console.log(myArrayDiv)


//             EXERCICIO BONUS 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {

  for (let j = 0; j < i; j += 1) {

    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);


//              EXERCICIO BONUS 2