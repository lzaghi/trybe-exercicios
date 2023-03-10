// 1
const numberInput: number = 7;

const isItAPrime = (param: number): boolean => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// 2
const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

// 3
const numberList: number[] = [10, 5, 18, 2, 8, 23];

const sortInput = (param: number[]): number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// 4
const peopleInput = {
  name: 'Rui',
  age: 23,
};

// const createSimpleSentence = (param: {name: string, age: number}) => {
const createSimpleSentence = (param: typeof peopleInput) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// 5
const ageInput: number = 15;

const isOfLegalAge = (param: string | boolean) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));