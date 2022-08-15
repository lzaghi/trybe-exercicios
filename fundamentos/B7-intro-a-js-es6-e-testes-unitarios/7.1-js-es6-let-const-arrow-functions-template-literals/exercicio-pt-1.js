// =============EXERCICIO 1

// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// =============EXERCICIO 2
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  // for (let i = 1; i < array.length; i += 1) {
  //   for (let j = 0; j < i; j += 1) {
  //     if (array[i] < array[j]) {
  //       let temp = array[i]
  //       array[i] = array[j]
  //       array[j] = temp
  //     }
  //   }
  // }
  // return array

  array.sort((a, b) => a - b)
  return array
};

sortOddsAndEvens(oddsAndEvens)

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
