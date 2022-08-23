// EXERCICIO 1 - JUNTAR ARRAYS NUM ARRAY DE OBJETOS
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const juntaArrays = (arrayProducts, arrayPrices) => {
  return arrayProducts.map((element, index) => {
    const obj = {}
    obj[element] = arrayPrices[index]
    return obj
  })
}
console.log(juntaArrays(products, prices));

// GABARITO
// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
//   { [product]: listPrices[index] }
// ));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);