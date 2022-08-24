// buscar maior valor em um array
const numbers = [50, 85, -30, 3, 15];

// const maior = numbers.reduce((acc, curr) => curr > acc? acc = curr : acc = acc);
// console.log(maior);

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85