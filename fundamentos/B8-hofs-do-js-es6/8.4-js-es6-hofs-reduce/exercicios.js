// EXERCICIO 1
// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), [])
// }
// console.log(flatten());


// EXERCICIO 2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//EXERCICIO 2
function reduceNames() {
  return books.reduce((acc, curr) => `${acc} ${curr.author.name},` , '');
}
// console.log(pontoFinal(reduceNames()));


// EXERCICIO 3
function averageAge() {
  const soma = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0)
  return (soma / (books.length))
}
// console.log(averageAge());


// EXERCICIO 4
function longestNamedBook() {
  return books.reduce( (acc, curr) => (acc.name.length > curr.name.length) ? acc : curr )
}
// console.log(longestNamedBook());


// EXERCICIO 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   return names.reduce( (acc, curr) => {
//     const palavraQuebrada = curr.split('')
//     palavraQuebrada.forEach((element) => (element.toLowerCase() === 'a') ? acc += 1 : acc);
//     return acc
//   }, 0)
// }
// console.log(containsA());

//GABARITO
function containsA() {
  return names.reduce((acc, currWord) =>
     acc + currWord.split('').reduce((acumulator, currLetter) => {
        if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
// console.log(containsA());


// EXERCICIO 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map( (element, index) => ({
    name: element,
    average: grades[index].reduce( (acc, curr) => (acc + curr), 0 ) / grades[index].length,
  }))
}
console.log(studentAverage());