const { encode, decode } = require('./encodeDecode');

describe('Teste função encode()', () => {
  test('encode é função?', () => {
    expect(typeof encode).toBe('function')
  })

  test('vogais convertem para numeros?', () => {
    expect(encode('aeiou')).toBe('12345')
  })

  test('demais letras nao convertem', () => {
    expect(encode('qwerty')).toBe('qw2rty')
  })

  test('strings de entrada e saida tem o mesmo tamanho', () => {
    expect(encode('oirrrr').length).toBe(6)
  })
})

describe('Teste função decode()', () => {
  test('decode é função?', () => {
    expect(typeof encode).toBe('function')
  })

  test('numeros convertem para vogais?', () => {
    expect(decode('12345')).toBe('aeiou')
  })

  test('demais numeros nao convertem', () => {
    expect(decode('5678')).toBe('u678')
  })

  test('strings de entrada e saida tem o mesmo tamanho', () => {
    expect(decode('o1rrrr').length).toBe(6)
  })
})