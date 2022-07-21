// ARRAY PARA EXERCICIOS 1 A 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
let sum = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i]
}

media = sum/numbers.length

console.log(media);