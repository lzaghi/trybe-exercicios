// https://github.com/tryber/academia-de-logica/blob/main/Dia4.2/script.js

// const idadeMarina = 33;
// const idadeSilvia = 26;
// const idadeIza = 29;

// if (idadeMarina < idadeSilvia && idadeMarina < idadeIza) {
//   console.log("Marina é a pessoa jovem e possui", idadeMarina, "anos de idade");
// }
// else if (idadeSilvia < idadeIza && idadeSilvia < idadeMarina) {
//   console.log("Sílvia é a pessoa jovem e possui", idadeSilvia, "anos de idade");
// }
// else {
//   console.log("Iza é a pessoa jovem e possui", idadeIza, "anos de idade");
// }

const age = 24;
const sex = "F";
const weight = 70;
const height = 170;

let formulaHomem = (height*6.25) + (weight*9.99) - (age*4.92) + 5;
let formulaMulher = (height*6.25) + (weight*9.99) - (age*4.92) - 161;

if (sex === "M") {
  console.log("A taxa metabólica basal é :", formulaHomem.toFixed(2), "Kcal");
}
else if (sex === "F") {
  console.log("A taxa metabólica basal é :", formulaMulher.toFixed(2), "Kcal")
}
else {
  console.log("Sexo inválido");
}