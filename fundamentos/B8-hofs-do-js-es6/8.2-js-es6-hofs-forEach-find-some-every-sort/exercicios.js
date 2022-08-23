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


// EXERCICIO 1
function authorBornIn1947() {
  return books.find((element) => element.author.birthYear === 1947)                 // ou ja bota o .author.name aqui!!!!
}
// console.log(authorBornIn1947());
// console.log(`O nome do autor nascido em 1947 é ${authorBornIn1947().author.name}`);


// EXERCICIO 2
function smallerName() {
  let nameBook;
  
  // books.sort((a, b) => a.name.length - b.name.length)             // minha solução. Abaixo o do course
  // nameBook = books[0].name;

  books.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name
    }
  })

  return nameBook;
}
// console.log(smallerName());


// EXERCICIO 3
function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}
// console.log(getNamedBook());


// EXERCICIO 4
function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc());


// EXERCICIO 5
function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear <= 2000)
}
// console.log(everyoneWasBornOnSecXX());


// EXERCICIO 6
function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
}
// console.log(someBookWasReleaseOnThe80s());


// EXERCICIO 7
// function authorUnique() {
//   return books.every((elementEvery) => {
//     books.some((elementSome) => {
//       (elementSome.author.birthYear === elementEvery.author.birthYear)
//       && (elementSome.author.name !== elementEvery.author.name)
//     })
//   })
// }
// console.log(authorUnique());

function unico() {
  let resp = false;
  books.forEach((element) => {
    let count = 0;
    books.forEach((ele) => {
      if (ele.author.birthYear === element.author.birthYear && ele.author.name !== element.author.name) {
        count += 1
      }
    })
    if (count > 0) {
      resp = true;
    }
  })
  return resp
}
console.log(unico());