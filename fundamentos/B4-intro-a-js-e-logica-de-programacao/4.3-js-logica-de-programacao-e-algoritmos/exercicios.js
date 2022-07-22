
// EXERCICIO 1
let number = 10;
let array = [];

for (let i = 1; i <= number; i += 1) {
  array.push(i)
}

let total = 1;

for (let j = 0; j < array.length ; j += 1) {
  total *= array[j]
}

console.log(total);