// //====================PARTE II
// const order = {
//   name: 'Rafael Andrade',

//   phoneNumber: '11-98763-1416',
  
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },

//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },

//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },

//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },

//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };


// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const name = order.name;
//   const phone = order.phoneNumber;
//   const address = order.address;

//   return `Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phone}, R. ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`
// }
// // console.log(customerInfo(order));


// const orderModifier = (order) => {
//   let nome = order.name;
//   nome = 'Luiz Silva';
//   let total = order.payment.total;
//   total = '50'

//   // const newBuyer = order.name = 'Luiz Silva';           //const com = e dps = de novo tb rola!
//   // const newTotal = order.payment.total = '50';

//   const sabores = Object.keys(order.order.pizza);

//   const bebida = order.order.drinks.coke.type;

//   return `Olá ${nome}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${bebida} é R$${total},00.`
// }
// console.log(orderModifier(order));


//==================PARTE III
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercicio 1
const addChave = (objeto, chave, valor) => objeto[chave] = valor

addChave(lesson2, 'turno', 'noite')
// console.log(lesson2);


// exercicio 2
const listaKeys = objeto => {
  return Object.keys(objeto);
}
// console.log(listaKeys(lesson1));


//exercicio 3
const tamanhoObj = objeto => {
  return Object.keys(objeto).length;
}
// console.log(tamanhoObj(lesson1))


//exercicio 4
const listaValores = objeto => Object.values(objeto)
// console.log(listaValores(lesson1));


//exercicio 5
const allLessons = {}

addChave(allLessons, 'lesson1', lesson1);
addChave(allLessons, 'lesson2', lesson2);
addChave(allLessons, 'lesson3', lesson3);
// console.log(allLessons);

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });       mt mais resumido


//exercicio 6 
const totalEstudantes = object => {
  let total = 0;
  for (let keys in object) {
    total += object[keys].numeroEstudantes
  }
  return total
}
// console.log(totalEstudantes(allLessons));


//exercicio 7
const getValueByIndex = (object, index) => Object.values(object)[index]

// console.log(getValueByIndex(lesson1, 0));


//exercicio 8
const verifyPair = (objeto, chave, valor) => {
  let array = Object.entries(objeto)
 
  // count = 0;
  let comparacao = false

  for (let keys in array) {
    if (array[keys][0] == chave && array[keys][1] == valor)
    // count += 1
    comparacao = true
  }
  // if (count > 0){
  //   return true
  // }
  // else {
  //   return false
  // }
  return comparacao
}
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'turno', 'manhã'));


