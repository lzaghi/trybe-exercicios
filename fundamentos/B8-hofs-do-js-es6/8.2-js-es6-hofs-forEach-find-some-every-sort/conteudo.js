// ========= FOR EACH
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach((element) => showEmailList(element))
// // emailListInData.forEach(showEmailList);      JA DAVA!!!
 

// ================= FIND
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((element) => element % 3 === 0 && element % 5 ===0)

console.log(findDivisibleBy3And5())