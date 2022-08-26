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
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

const [ frase, funcao ] = saudacoes
funcao(frase); // Olá