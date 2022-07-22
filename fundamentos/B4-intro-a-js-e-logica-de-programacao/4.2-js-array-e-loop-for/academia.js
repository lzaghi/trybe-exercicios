// https://github.com/tryber/academia-de-logica/blob/main/Dia4.2/script.js

//                                EXERCICIO 1
// const idadeMarina = 36;
// const idadeSilvia = 36;
// const idadeIza = 26;

// if (idadeMarina < 0 || idadeSilvia < 0 || idadeIza < 0) {
//   console.log("Idade inválida encontrada! Revise os valores");
// } 
// else if (idadeMarina === idadeSilvia && idadeMarina < idadeIza) {
//   console.log("Marina e Sílvia são as mais jovens, com", idadeMarina, "anos de idade");
// }
// else if (idadeSilvia === idadeIza && idadeSilvia < idadeMarina) {
//   console.log("Sílvia e Iza são as mais jovens, com", idadeSilvia, "anos de idade");
// }
// else if (idadeMarina === idadeSilvia && idadeMarina === idadeIza) {
//   console.log("Todas são da mesma idade:", idadeMarina, "anos");
// }
// else if (idadeMarina < idadeSilvia && idadeMarina < idadeIza) {
//   console.log("Marina é a pessoa jovem e possui", idadeMarina, "anos de idade");
// }
// else if (idadeSilvia < idadeIza && idadeSilvia < idadeMarina) {
//   console.log("Sílvia é a pessoa jovem e possui", idadeSilvia, "anos de idade");
// }
// else {
//   console.log("Iza é a pessoa jovem e possui", idadeIza, "anos de idade");
// }


//                             EXERCICIO 2
// const age = 24;
// const sex = "m";
// const weight = 70;
// const height = 170;

// let formulaHomem = (height*6.25) + (weight*9.99) - (age*4.92) + 5;
// let formulaMulher = (height*6.25) + (weight*9.99) - (age*4.92) - 161;

// if (sex.toUpperCase() === "M") {
//   console.log("A taxa metabólica basal é :", formulaHomem.toFixed(2), "Kcal");
// }
// else if (sex.toUpperCase() === "F") {
//   console.log("A taxa metabólica basal é :", formulaMulher.toFixed(2), "Kcal")
// }
// else {
//   console.log("Sexo inválido");
// }


//                               EXERCICIO 3
let numero = 1;

if (numero <= 0) {
  console.log("Opção inválida");
}
else {
  switch (numero) {
    case 1:
      console.log("1 - Trybe Lanche Feliz");
      break;
    case 2:
      console.log("2 - McTrybe");
      break;
    case 3:
      console.log("3 - TrybeWooper");
      break;
    case 4:
      console.log("4 - X-Trybe");
      break;
    case 5:
      console.log("5 - Triplo Trybe com JS");
      break;
    default:
      console.log("Ainda não possuímos essa opção :("); 
  }
}
