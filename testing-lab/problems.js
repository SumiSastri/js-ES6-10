/* eslint-disable no-unused-vars */

// write your functions here...

function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0){
    return 'fizzbuzz'
  } else if (number % 5 === 0){
    return 'buzz'
  } else if (number % 3 === 0){
    return 'fizz'
  } else {
    return number
  }
}

const numbers = [1, 3, 5]
//
// function indexHighestNumber (array) {
//   const findHighest = array.reduce((numbers) => {
//     return Math.max(numbers)
//   }, 0)
//   return findHighest
// }
indexHighestNumber(numbers)
//const arrMax = array => Math.max(...array)
