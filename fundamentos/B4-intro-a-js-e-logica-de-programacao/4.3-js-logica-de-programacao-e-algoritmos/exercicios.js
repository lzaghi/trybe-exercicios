
//                                   EXERCICIO 1
// let number = 10;
// let array = [];

// for (let i = 1; i <= number; i += 1) {
//   array.push(i)
// }

// let total = 1;

// for (let j = 0; j < array.length ; j += 1) {
//   total *= array[j]
// }

// console.log(total);


//                                  EXERCICIO 2
let word = 'socorram me subi no onibus em marrocos';

let novaWord = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
  novaWord += word[i];
}

console.log(novaWord);