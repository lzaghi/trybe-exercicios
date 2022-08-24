//  =============== EXERCICIO 1 - buscar maior valor em um array
// const numbers = [50, 85, -30, 3, 15];

// // const maior = numbers.reduce((acc, curr) => curr > acc? acc = curr : acc = acc);
// // console.log(maior);

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85


// ============ EXERCICIO 2 - somar todos pares do array
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const pares = numbers.filter((ele) => ele % 2 === 0)

// const somaPares = pares.reduce((acc, curr) => acc + curr)

// console.log(somaPares);

//gabarito
// const getEven = (number) => number % 2 === 0;
// const sumPair = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

//gabarito alternativo
// const sumPair = (accumulator, number) => (
//   (number % 2 === 0) ? accumulator + number : accumulator
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152


// ============ EXERCICIO 3 - mostrar qual materia o estudante foi melhor
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// const melhor = (acc, curr) => {
//   if (acc.nota > curr.nota) return acc;
//   return curr
// }

// const melhorTodos = estudantes.map((elemento) => ({
//   estudante: elemento.nome,
//   materia: elemento.materias.reduce(melhor).name
//   })
// )

// console.log(melhorTodos);

// GABARITO
const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));