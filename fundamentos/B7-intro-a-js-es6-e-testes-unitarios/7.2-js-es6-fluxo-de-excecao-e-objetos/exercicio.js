const order = {
  name: 'Rafael Andrade',

  phoneNumber: '11-98763-1416',
  
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },

  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },

      pepperoni: {
        amount: 1,
        price: 20,
      }
    },

    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },

    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const address = order.address;

  return `Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phone}, R. ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`
}
// console.log(customerInfo(order));


const orderModifier = (order) => {
  let nome = order.name;
  nome = 'Luiz Silva';
  let total = order.payment.total;
  total = '50'

  // const newBuyer = order.name = 'Luiz Silva';           //const com = e dps = de novo tb rola!
  // const newTotal = order.payment.total = '50';

  const sabores = Object.keys(order.order.pizza);

  const bebida = order.order.drinks.coke.type;

  return `Olá ${nome}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${bebida} é R$${total},00.`
}
console.log(orderModifier(order));