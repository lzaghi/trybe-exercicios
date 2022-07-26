
//===============================OBJETOS E FOR/IN

//                                   EXERCICIO 1
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// // console.log("Bem-vinda,", info.personagem);

// //                                 EXERCICIO 2
// info.recorrente = "Sim"
// // console.log(info);

// //                                  EXERCICIO 3
// for (let keys in info){
//   // console.log(keys);
// }

// //                                  EXERICIO 4
// for (let keys in info){
//   // console.log(info[keys]);
// }

// //                                 EXERCICIO 5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// }

// for (let keys in info) {
//   if (keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim') {
//     console.log('Ambos recorrentes');
//   } 
//   else {
//     console.log(info[keys] + ' e ' + info2[keys]);
//   }
// }


//                                    EXERCICIO 6
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log("O livro favorito da", leitor.nome, "se chama", leitor.livrosFavoritos[0].titulo);

// //                                   EXERCICIO 7
// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// })

// console.table(leitor);

// //                                EXERCICIO 8
// console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos");


// =======================FUNÇÕES

//                                EXERCICIO 1
// function verificaPalindromo(string) {
//   let palavra = string
//   let array = string.split("");
  
//   let arrayReverso = array.reverse();
  
//   let stringReverso = arrayReverso.join("");

//   if (palavra === stringReverso) {
//     return true
//   }
//   return false
// }

// console.log(verificaPalindromo('bola'));


//                           EXERCICIO 2
// function indiceMaiorValor(array) {

//   let maior = array[0];
//   let index = 0;
//   for (let i = 1; i < array.length; i += 1) {
    
//     if (array[i] > maior) {
//       maior = array[i];
//       index = i;
//     }
//   }
//   return index
// }
// console.log( indiceMaiorValor([12, 13, 6, 7, 10, 1, 77]) );


//                        EXERCICIO 3
// function indiceMenorValor(array) {

//   let menor = array[0];
//   let index = 0;
//   for (let i = 1; i < array.length; i += 1) {
    
//     if (array[i] < menor) {
//       menor = array[i];
//       index = i;
//     }
//   }
//   return index
// }
// console.log( indiceMenorValor([-12, -13, 6, 7, 10, 1, -77]) );


//                     EXERCICIO 4
// function maiorNome(array) {

//   let maior = array[0].length;
//   let maiorNome = array[0]

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > maior) {
//       maior = array[i].length;
//       maiorNome = array[i]
//     }
//   }
//   return maiorNome
// }
// console.log( maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) );


//                    EXERCICIO 5
function maisRepete(array) {

  let maiorCounter = 0;
  let index = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    let counter = 0;

    for (let j = 0; j <= i; j += 1){
      if (array[j] === array[i]) {
        counter += 1
      }
    }
    if (counter > maiorCounter) {
      maiorCounter = counter;
      index = i
    }
  }

  return array[index]
}
console.log( maisRepete([2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8, 8]) );