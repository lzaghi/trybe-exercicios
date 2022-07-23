
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
// let word = 'socorram me subi no onibus em marrocos';

// let novaWord = '';

// for (let i = word.length - 1; i >= 0; i -= 1) {
//   novaWord += word[i];
// }

// console.log(novaWord);


//                                 EXERCICIO 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let arrayTamanhos =[];
for (let i = 0; i < array.length; i += 1) {
  arrayTamanhos.push(array[i].length)
}

let maior = arrayTamanhos[0]
let index;
for (let j = 1; j < arrayTamanhos.length; j += 1) {
  if (arrayTamanhos[j] > maior) {
    maior = arrayTamanhos[j];
    index = j;
  }
}
console.log("a maior palavra é:", array[index], "com", maior, "caracteres");

let menor = arrayTamanhos[0]
let index2;
for (let k = 1; k < arrayTamanhos.length; k += 1) {
  if (arrayTamanhos[k] < menor) {
    menor = arrayTamanhos[k];
    index2 = k;
  }
}
console.log("a menor palavra é:", array[index2], "com", menor, "caracteres");


//                                 EXERCICIO 4
