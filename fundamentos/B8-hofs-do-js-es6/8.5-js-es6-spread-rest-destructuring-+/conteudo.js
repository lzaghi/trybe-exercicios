//SPREAD
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'uva', 'larnaja', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'calda', 'paçoquita'];

const fruitSalad = (fruit, additional) => {
  const pedido = [...fruit, ...additional]
  return pedido
}

console.log(fruitSalad(specialFruit, additionalItens));