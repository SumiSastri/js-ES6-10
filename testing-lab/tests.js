/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

// write your tests here...

// A function which takes a number and returns 'Fizz' if the number is divisable by 3, 'Buzz' if the number is divisable by 5, 'Fizzbuzz' divisable by both and the number is not divisable by 3 or 5
describe('FizzBuzz', () => {
  it('should return a fizz if divisible by 3',() => {
    expect(fizzbuzz(3)).to.equal('fizz')
  })
  it('should return buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).to.equal('buzz')
  })
  it('should return fizzbuzz if divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).to.equal('fizzbuzz')
    expect(fizzbuzz(15)).to.not.equal('fizz')
    expect(fizzbuzz(15)).to.not.equal('buzz')
  })
  it('should return fizzbuzz if notdivisible by 3 and 5', () => {
    expect(fizzbuzz(4)).to.equal(4)
  })
})
// A function which takes an array of numbers and returns the index of the highest value

describe('indexHighestNumber', () => {
  it('should return the index of the highest number in an array of numbers', () => {
    expect(findIndex(222, [44, 133, 222, 111])).to.equal(2)
    expect(indexHighestNumber(4, [4, 3, 2, 1])).to.equal(0)
  })
})

// A function which takes an array of numbers and returns the sum of the 3 highest values

describe('sumOfThreeHighest', () => {
  it('should return the sum of the 3 highest numbers in an array', () => {
    expect(sumOfThreeHighest([12, 4, 4, 6, 12])).to.equal(30)
    expect(sumOfThreeHighest([12, 41, 44, 66])).to.equal(141)
  })
})

// Calculate the Price of an ice-cream. A function which takes either one or two numbers,
//the first number being the number of scoops. The second being the number of flakes.
//Scoops cost 1.20. Flakes cost 0.55. The function returns the the price of the ice-cream.
describe('priceOfIceCream', () => {
  it('should return the sum of scoops and flakes multiplied by sum of price of scoops and flakes', () => {
    expect(priceOfIcream([1, 1])).to.deep.equal([1.20, 0.55])
  })
})

// Tax Calculator - Write a function that takes two arguments, an amount in pounds (£) and a tax percentage (as a decimal (0.2) or a whole number (20) both being 20%). Return a string 'Your tax is Xp'.
