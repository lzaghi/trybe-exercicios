// ==========EXERCICIO 1
// const dados = (nomeCompleto) => {
//   let arrayNome = nomeCompleto.toLowerCase().split(' ')
//   const obj = {
//     Nome: nomeCompleto,
//     Email: `${arrayNome.join('_')}@trybe.com`
//   };
//   return obj
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(dados));


// ==========EXERCICIO 2
// const checa = (apostado, sorteado) => {
//   let resultado = "Tente novamente..."
//   if (apostado === sorteado) {
//     resultado = "Parabéns, você ganhou!"
//   } 
//   return resultado
// };

// const resultado = (apostado, callback) => {
//   let sorteado = Math.floor((Math.random() * 5) + 1);
//   return callback(apostado, sorteado);
// }

// console.log(resultado(2, checa));

// // Alternativa:
// // const numberChecker = (myNumber, number) => myNumber === number;
// // return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';


//========= EXERCICIO 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (correta, marcada) => {
  // let total = 0;
  // for (let i = 0; i < correta.length; i += 1) {
  //   if (correta[i] === marcada[i]) {
  //     total += 1;
  //   }
  //   else if (correta[i] !== marcada[i] && marcada[i] !== 'N.A'){
  //     total -= 0.5
  //   }
  // }
  // return total

  if (correta === marcada) {
    return 1;
  } if (marcada === 'N.A') {
    return 0;
  }
  return -0.5;
};

const totalPontos = (correta, marcada, callback) => {
  // return callback(correta, marcada)

  let counter = 0;
  for (let i = 0; i < correta.length; i += 1) {
    const callbackReturn = callback(correta[i], marcada[i]);
    counter += callbackReturn;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(totalPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas));

// essa segunda maneira é do gabarito. A minha funcionou, mas basicamente tava td na primeira função, a segunda só chamava. Depois, ficou apenas a comparação numa função, e soma de valores na segunda.