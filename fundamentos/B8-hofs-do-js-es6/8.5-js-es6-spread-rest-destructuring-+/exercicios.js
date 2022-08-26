// ===== EXERCICIO 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  // console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});


// ======== EXERCICIO 2
const sum = (...valores) => valores.reduce( (acc, curr) => acc + curr, 0) 

// console.log(sum(4, 5, 6));
// console.log(sum(4, 5, 6, 10, 1000));


// ======== EXERCICIO 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};


const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'


// =========== EXERICIO 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (array) => {
  return  array.filter((element) => {
    const { bornIn, nationality} = element
    if (bornIn <= 2000 && nationality === 'Australian') return element
  })
}

//REFATORADO
const filterPeopleR = (array) => array.filter(({ bornIn, nationality}) => bornIn <= 2000 && nationality === 'Australian');

console.log(filterPeopleR(people));