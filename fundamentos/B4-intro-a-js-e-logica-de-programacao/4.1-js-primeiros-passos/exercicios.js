//                                  EXERCÍCIO 1
// const a = 20;
// const b = 40;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

//                                  EXERCICIO 2
// const a = 80;
// const b = 50;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

//                                  EXERCICIO 3
// const a = 80;
// const b = 90;
// const c = 120;

// if (a > b && a > c) {
//   console.log(a);
// } 
// else if (b > a && b > c) {
//   console.log(b);
// }
// else {
//   console.log(c);
// }

//                                 EXERCICIO 4
// const x = 0;

// if (x > 0) {
//   console.log("positive");
// }
// else if (x < 0) {
//   console.log("negative");
// }
// else {
//   console.log("zero");
// }

//                               EXERCICIO 5
// const a = 50;
// const b = 60;
// const c = 70;

// if (a < 0 || b < 0 || c < 0) {
//   console.log("Erro: ângulo inválido");
// }
// else if (a + b + c === 180) {
//   console.log("true");
// }
// else if (a + b + c !== 180) {
//   console.log("false");
// }

//                              EXERCICIO 6
// peão torre bispo cavalo rainha rei 
// const peca = "REi";

// if (peca.toLowerCase() === "peão") {
//   console.log("Vertical");
// }
// else if (peca.toLowerCase() === "torre") {
//   console.log("Horizontal e Vertical");
// }
// else if (peca.toLowerCase() === "bispo") {
//   console.log("Diagonais");
// }
// else if (peca.toLowerCase() === "cavalo") {
//   console.log("Formato L");
// }
// else if (peca.toLowerCase() === "rainha") {
//   console.log("Horizontal, Vertical e Diagonais");
// }
// else if (peca.toLowerCase() === "rei") {
//   console.log("Horizontal, Vertical e Diagonais");
// }
// else {
//   console.log("Peça inválida");
// }

//                             EXERCICIO 7
// const nota = 105;

// if (nota <=100 && nota >= 90) {
//   console.log("A");
// }
// else if (nota < 90 && nota >= 80) {
//   console.log("B");
// }
// else if (nota < 80 && nota >= 70) {
//   console.log("C");
// }
// else if (nota < 70 && nota >= 60) {
//   console.log("D");
// }
// else if (nota < 60 && nota >= 50) {
//   console.log("E");
// }
// else if (nota < 50 && nota >= 0) {
//   console.log("F");
// }
// else {
//   console.log("Erro: nota inválida");
// }

//                           EXERCICIO 8
// const a = -2;
// const b = 4;
// const c = 6;

// if (a%2 === 0 || b%2 === 0 || c%2 === 0 ) {
//   console.log("true");
// } 
// else {
//   console.log("false");
// }

                                                      //                            RESOLUÇÃO 8
                                                      // const a = 1;
                                                      // const b = 3;
                                                      // const c = 5;

                                                      // let isEven = false;

                                                      // if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
                                                      //   isEven = true;
                                                      // };
                                                      // console.log(isEven);

//                          EXERCICIO 9
// const a = 2;
// const b = 3;
// const c = 4;

// if (a%2 !== 0 || b%2 !== 0 || c%2 !== 0 ) {
//   console.log("true");
// } 
// else {
//   console.log("false");
// }

                                                      //                            RESOLUÇÃO 9
                                                      // const a = 1;
                                                      // const b = 3;
                                                      // const c = 5;

                                                      // let isOdd = false;

                                                      // if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
                                                      //   isOdd = true;
                                                      // };
                                                      // console.log(isOdd);

//                        EXERCICIO 10
// const custo = 50;
// const venda = 220;

// let custoTotal = custo + (0.2 * custo);
// let lucro = venda - custoTotal;

// let lucroFinal = lucro * 1000;

// if (custo < 0 || venda < 0) {
//   console.log("Erro: valor inválido");
// }
// else {
//   console.log("O lucro é de: " + lucroFinal);
// }

//                       EXERCICIO 11
const salarioInicial = 3000;

let salarioDescontadoDeINSS = 0;

if (salarioInicial <= 1556.94) {
  salarioDescontadoDeINSS = salarioInicial - (salarioInicial*.08)
}
else if (salarioInicial > 1556.94 && salarioInicial <=2594.92) {
  salarioDescontadoDeINSS = salarioInicial - (salarioInicial*.09)
}
else if (salarioInicial > 2594.92 && salarioInicial <=5189.82) {
  salarioDescontadoDeINSS = salarioInicial - (salarioInicial*.11)
}
else if (salarioInicial > 5189.82) {
  salarioDescontadoDeINSS = salarioInicial - 570.88
}

let salarioDescontadoDeIR =0;

if (salarioDescontadoDeINSS <= 1903.98) {
  salarioDescontadoDeIR = salarioDescontadoDeINSS
}
else if (salarioDescontadoDeINSS > 1903.98 && salarioDescontadoDeINSS <=2826.65) {
  salarioDescontadoDeIR = salarioDescontadoDeINSS - (salarioDescontadoDeINSS*.075 - 142.80)
}
else if (salarioDescontadoDeINSS > 2826.65 && salarioDescontadoDeINSS <=3751.05) {
  salarioDescontadoDeIR = salarioDescontadoDeINSS - (salarioDescontadoDeINSS*.15 - 354.80)
}
else if (salarioDescontadoDeINSS > 3751.05 && salarioDescontadoDeINSS <=4664.68) {
  salarioDescontadoDeIR = salarioDescontadoDeINSS - (salarioDescontadoDeINSS*.225 - 636.13)
}
else if (salarioDescontadoDeINSS > 4664.68) {
  salarioDescontadoDeIR = salarioDescontadoDeINSS - (salarioDescontadoDeINSS*.275 - 869.36)
}

console.log(salarioDescontadoDeIR);

                                                                // RESOLUÇÃO 11
                                                                // let aliquotINSS;
                                                                // let aliquotIR;

                                                                // const grossSalary = 2000.00;

                                                                // if (grossSalary <= 1556.94) {
                                                                //   aliquotINSS = grossSalary * 0.08;
                                                                // } else if (grossSalary <= 2594.92) {
                                                                //   aliquotINSS = grossSalary * 0.09;
                                                                // } else if (grossSalary <= 5189.82) {
                                                                //   aliquotINSS = grossSalary * 0.11;
                                                                // } else {
                                                                //   aliquotINSS = 570.88;
                                                                // }

                                                                // const baseSalary = grossSalary - aliquotINSS;

                                                                // if (baseSalary <= 1903.98) {
                                                                //   aliquotIR = 0;
                                                                // } else if (baseSalary <= 2826.65) {
                                                                //   aliquotIR = (baseSalary * 0.075) - 142.80;
                                                                // } else if (baseSalary <= 3751.05) {
                                                                //   aliquotIR = (baseSalary * 0.15) - 354.80;
                                                                // } else if (baseSalary <= 4664.68) {
                                                                //   aliquotIR = (baseSalary * 0.225) - 636.13;
                                                                // } else {
                                                                //   aliquotIR = (baseSalary * 0.275) - 869.36;
                                                                // };

                                                                // console.log("Salário: " + (baseSalary - aliquotIR));