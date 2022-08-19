// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let pessoa = ''

  for (let i = 0; i < professionalBoard.length; i += 1) {
    const pessoaAtual = professionalBoard[i]
    if(pessoaAtual.id === id) {
      pessoa = pessoaAtual
    }
  }

  if (!pessoa) {
    throw new Error("ID não identificada");
  }

  if (!pessoa[detail]) {
    throw new Error("Informação indisponível");
  }

  return pessoa[detail]

};

// console.log(searchEmployee('4678-2', 'lastName'));
module.exports = searchEmployee;