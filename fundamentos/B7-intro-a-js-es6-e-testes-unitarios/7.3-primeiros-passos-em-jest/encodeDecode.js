function encode(string) {

  let novaString = "";

  for (let i = 0; i < string.length; i += 1) {

    if (string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u') {
      novaString += string[i]
    }
    else if (string[i] === 'a') {
      novaString += '1'
    }
    else if (string[i] === 'e') {
      novaString += '2'
    }
    else if (string[i] === 'i') {
      novaString += '3'
    }
    else if (string[i] === 'o') {
      novaString += '4'
    }
    else if (string[i] === 'u') {
      novaString += '5'
    }
  }
  return novaString
}

function decode(string) {

  let novaString = "";

  for (let i = 0; i < string.length; i += 1) {

    if (string[i] !== '1' && string[i] !== '2' && string[i] !== '3' && string[i] !== '4' && string[i] !== '5') {
      novaString += string[i]
    }
    else if (string[i] === '1') {
      novaString += 'a'
    }
    else if (string[i] === '2') {
      novaString += 'e'
    }
    else if (string[i] === '3') {
      novaString += 'i'
    }
    else if (string[i] === '4') {
      novaString += 'o'
    }
    else if (string[i] === '5') {
      novaString += 'u'
    }
  }
  return novaString
}

module.exports = { encode, decode }