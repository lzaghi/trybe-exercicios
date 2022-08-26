//===============SPREAD
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'uva', 'larnaja', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'calda', 'paçoquita'];

const fruitSalad = (fruit, additional) => {
  const pedido = [...fruit, ...additional]
  return pedido
}

// console.log(fruitSalad(specialFruit, additionalItens));


//============OBJECT DESTRUCTURING
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const infosCompletas = {...user, ...jobInfos}
// console.log(infosCompletas);

const { name, age, nationality, profession, squad, squadInitials } = infosCompletas
// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad} `);


// ========== ARRAY DESTRUCTURING

// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá

const [ frase, funcao ] = saudacoes
// funcao(frase); // Olá


// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
// console.log(comida, animal, bebida); // gato água arroz. Ordem errada, nomes não informativos

// let lista = [comida, animal, bebida]
// const [ Animal, Bebida, Comida ] = lista

[comida, animal, bebida] = [bebida, comida, animal]  // Gabarito. Cria o array e já o desestrutura!!!

// console.log(animal, bebida, comida); // gato água arroz


// 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// console.log(numerosPares); // imprime tudo, não condiz com o que deveria possuir

[,,, ...numerosPares] = numerosPares;  // Gabarito. nao estritamente necessario atribuir a uma const p desestruturar!!!
// console.log(numerosPares); // [6, 8, 10, 12];


// ======= DEFAULT DESTRUCTURING
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is Brazilian


// ======== OBJECT PROPERTY SHORTHAND
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));