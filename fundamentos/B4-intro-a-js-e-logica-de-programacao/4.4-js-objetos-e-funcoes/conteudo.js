// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
//   };
  
//   // diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo


// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4


// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey

//==============================

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//   console.log(position);
// };
// //resultado: 0, 1, 2;

// let foods = ['hamburguer', 'bife', 'acarajé'];
// for (let value of foods) {
//   console.log(value);
// };
// //resultado: hamburguer, bife, acarajé;


// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado


// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais

//==========OBJETOS============

//            EXERCICIO 1
// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: { golden: 2, silver: 3, },
// }

// //           EXERCICIO 2
// console.log("A jogadora", player.name, player.lastName, "tem", player.age, "anos de idade");

// //           EXERCICIO 3
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
// console.log(player);

// //           EXERCICIO 4
// console.log("A jogadora ", player.name, player.lastName, "foi eleita a melhor do mundo por", player.bestInTheWorld.length, "vezes");

// //          EXERCICIO 5
// console.log("A jogadora possui", player.medals.golden, "medalhas de ouro e", player.medals.silver, "medalhas de prata");


// ================FOR/IN FOR/OF

//            EXERCICIO 1
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let keys in names) {
//   console.log("Olá", names[keys]);
// }

// //           EXERCICIO 2
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let keys in car) {
//   console.log(keys, ":", car[keys]);
// }


//====================FUNCTIONS
// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(20, 40));

// function sub(a, b) {
//   return a - b;
// }
// console.log(sub(20, 40));

// function mult(a, b) {
//   return a * b;
// }
// console.log(mult(20, 40));

// function div(a, b) {
//   return a / b;
// }
// console.log(div(20, 40));

// function mod(a, b) {
//   return a % b;
// }
// console.log(mod(20, 40));


// function compare2(a, b) {
//   if (a > b) {
//     return a
//   }
//   return b
// }
// console.log(compare2(30, 50));


// function compare3(a, b, c) {
//   if (a > b && a > c) {
//     return a
//   }
//   else if (b > a && b > c) {
//     return b
//   }
//   return c
// }
// console.log(compare3(130, 50, 120));


// function check(x) {
//   if (x > 0) {
//     return "positive";
//   }
//   else if (x < 0) {
//     return "negative";
//   }
//   return "zero"
// }
// console.log(check(0));


function triangle(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
    return "Erro: ângulo inválido";
  }
  else if (a + b + c === 180) {
    return true;
  }
  return false;
}
console.log(triangle(50, 60, 10));