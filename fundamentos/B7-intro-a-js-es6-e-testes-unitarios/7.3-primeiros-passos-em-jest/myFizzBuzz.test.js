const { execPath } = require('process');
const myFizzBuzz = require('./myFizzBuzz');

describe('testa função myFizzBuzz()', () => {
  test('parâmetro 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  })

  test('parâmetro 9 retorna fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')
  })

  test('parâmetro 10 retorna buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz')
  })

  test('parâmetro "11" retorna false', () => {
    expect(myFizzBuzz('11')).toBe(false)
  })
})