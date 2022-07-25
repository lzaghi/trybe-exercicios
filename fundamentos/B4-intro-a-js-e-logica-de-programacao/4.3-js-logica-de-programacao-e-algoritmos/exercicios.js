
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
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let arrayTamanhos =[];
// for (let i = 0; i < array.length; i += 1) {
//   arrayTamanhos.push(array[i].length)
// }

// let maior = arrayTamanhos[0]
// let index;
// for (let j = 1; j < arrayTamanhos.length; j += 1) {
//   if (arrayTamanhos[j] > maior) {
//     maior = arrayTamanhos[j];
//     index = j;
//   }
// }
// console.log("a maior palavra é:", array[index], "com", maior, "caracteres");

// let menor = arrayTamanhos[0]
// let index2;
// for (let k = 1; k < arrayTamanhos.length; k += 1) {
//   if (arrayTamanhos[k] < menor) {
//     menor = arrayTamanhos[k];
//     index2 = k;
//   }
// }
// console.log("a menor palavra é:", array[index2], "com", menor, "caracteres");


//                                 EXERCICIO 4
// let primos = [];

// for (let i = 2; i <= 50; i += 1) {
//   let counter = 0;

//   for (let j = 2 ; j <= i; j+= 1) {
    
//     if (i % j === 0) {
//       counter += 1
//     }
//   }

//   if (counter === 1) {
//     primos.push(i)
//   }
// }
// console.log(primos);
// console.log(primos[primos.length - 1])


//                            EXERCICIO BONUS 1
// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i += 1) {
//   string += "*"
// }

// for (j = 0; j < n; j+= 1){
//   console.log(string);
// }


//                          EXERCICIO BONUS 2
// let n = 5;
// let string = "";

// for (let i = 0; i < n; i += 1){
//   string += "*";
//   console.log(string);
// }


//                      EXERCICIO BONUS 3
// let n = 5;
// let espacos = n-1;
// for (let j = 0; j < espacos; j += 1) {
//   let string = "";
//   let repeticoes = espacos - j;

//   for (let i = 0; i < repeticoes; i += 1) {
//     string += " ";
//   }
  
//   while (string.length < n) {
//     string += "*";
//   }
 
//   console.log(string);
// }

// let base = "";
// for (let k = 0; k < n; k += 1) {
//   base += "*";
// }
// console.log(base);


//                   EXERCICIO BONUS 4
// let n = 5;
// let espacos = n - (Math.ceil(n/2));
// for (let i = 0; i < espacos; i += 1) {
//   let string = "";
//   let repeticoes = espacos - i;
//   let reps = n

//   for (let j = 0; j < repeticoes; j += 1) {
//     string += " ";
//     reps -= 2
//   }

//   for (let k = 0; k < reps; k +=1) {
//     string += "*"
//   }
//   console.log(string);
// }

// let base = "";
// for (let k = 0; k < n; k += 1) {
//   base += "*";
// }
// console.log(base);


//                   EXERCICIO BONUS 5
let n = 7;
let espacos = n - (Math.ceil(n/2));
for (let i = 0; i < espacos; i += 1) {
  let string = "";
  let repeticoes = espacos - i;
  let reps = n - 2

  for (let j = 0; j < repeticoes; j += 1) {
    string += " ";
    reps -= 2;
  }
  string += "*"

  if (string.length < (Math.ceil(n/2))) {
    for (let k = 0; k < reps; k+= 1){
      string += " "
    }
    string += "*"
  }
  
  console.log(string);
}

let base = "";
for (let k = 0; k < n; k += 1) {
  base += "*";
}
console.log(base);


//                   EXERCICIO BONUS 6
// let numero = 17;
// let array = [];

// for (let i = 2; i <= numero; i += 1) {
//   let counter = 0;

//   for (let j = 2; j <= i; j += 1) {
//     if (i % j === 0)
//     counter += 1
//   }

//   if (counter === 1) {
//     array.push(i);
//   }
// }

// let resposta = "O número " + numero + " não é primo";

// for (let k = 0; k < array.length; k +=1) {
//   if (array[k] === numero) {
//     resposta = "O número " + numero + " é primo";
//   }
// }

// console.log(resposta);