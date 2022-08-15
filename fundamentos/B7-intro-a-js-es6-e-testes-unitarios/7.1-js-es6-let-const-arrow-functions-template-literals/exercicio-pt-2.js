// ========= EXERCICIO 1 

// const factorial = num => {
//   let result = 1;

//   for (let i = 1; i <= num; i += 1) {
//     result *= i
//   }
//   return result
// }

// console.log(`Esse é o fatorial ${factorial(5)}`);

// const factorial = num => (num > 1) ? num * factorial(num - 1) : 1;

// console.log(`Esse é o fatorial ${factorial(4)}`);

// ======== EXERCICIO 2
// const longestWord = frase => {
//   const arrayPalavras = frase.split(' ');

//   let maior = 0;
//   let indice = 0;
//   for (let i = 0; i < arrayPalavras.length; i += 1) {
//     if (arrayPalavras[i].length > maior) {
//       maior = arrayPalavras[i].length;
//       indice = i;
//     }
//   }
//   return arrayPalavras[indice]

  
//   let maior = 0;
//   let result = '';
//   for (let word of arrayPalavras) {
//     if (word.length > maior) {
//       maior = word.length;
//       result = word;
//     }
//   }
//   return result
// }

// const longestWord = frase => frase.split(' ').sort((a, b) => b.length - a.length)[0];

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// ==================== EXERCICIO 4
const substituaX = nome => {
  const frase = 'Tryber x aqui!';

  let array = frase.split(' ')
  array[1] = nome

  return array.join(' ')
}
console.log(substituaX('lukinha'));


const minhasSkills = (retorno) => {
  const skills = ['html', 'css', 'js'];

  // return `${retorno} 
  // Minhas três principais habilidades são: 
  // ${skills}`

  let resultado = `
  ${retorno}
  Minhas três principais habilidades são: `;

  for (let i = 0; i < skills.length; i += 1) {
    resultado = `${resultado}
    - ${skills[i]}`    // reatribui resultado, concatenando cada skill
  }

  return resultado
}

console.log(minhasSkills(substituaX('luka')));