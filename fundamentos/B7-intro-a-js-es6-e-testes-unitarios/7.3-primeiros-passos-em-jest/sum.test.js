const sum = require('./sum');

describe('Testa função sum()', () => {
  test('retorna 9 quando sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('retorna 0 quando sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('lança erro quando sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow()
  })

  test('mensagem de erro deve ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers')
  })
})