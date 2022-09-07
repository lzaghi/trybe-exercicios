// const minhasDespesas = [
//   {
//     academia: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     celular: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const minhaRenda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//   const despesaTotal = callback(despesas);
//   const saldoFinal = renda - despesaTotal;

//   console.log(`Balanço do mês:
//     Recebido: R$${renda},00
//     Gasto: R$${despesaTotal},00
//     Saldo: R$${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//   const custoItem = despesas.map((item) => Object.values(item));
//   const despesaTotal = custoItem.reduce((acc, curr) => {
//     const soma = acc + curr[0];
//     return soma;
//   }, 0);
//   return despesaTotal;
// };

// despesaMensal(minhaRenda, minhasDespesas, somaDespesas);

//================== CALLBACKS
// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russo',
//   };
//   return callback(user)
// };

// console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
// console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"


// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       firstName: 'Ivan',
//       lastName: 'Ivanovich',
//       nationality: 'Russo',
//     };

//     // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
//     console.log(callback(user));
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo

// //momentos em q nome da pessoa imprime primeiro, outros em q nacionalidade imprime primeiro!!!


//================== OPERAÇÕES ASSINCRONAS - ERROS
const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      // insira uma `callback` como retorno da função em caso de erro
      onError(errorMessage);
    }
  }, delay());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);