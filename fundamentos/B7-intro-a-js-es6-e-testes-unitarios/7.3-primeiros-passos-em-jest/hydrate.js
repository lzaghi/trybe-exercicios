const hydrate = string => {
  let reg = /\d+/g;

  let arrayNumeros = string.match(reg)

  let soma = 0
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    soma += parseInt(arrayNumeros[i]);
  }

  let somaString = soma.toString();

  if (soma === 1) {
    return somaString + ' copo de água';
  }
  return somaString + ' copos de água';
}

module.exports = hydrate;