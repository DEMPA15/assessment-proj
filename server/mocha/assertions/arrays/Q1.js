const expect =  require('chai').expect

// 1. Write a JavaScript function to check whether an `input` is an array or not. Return true if the input is an array, and return false if the input is not an array.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php

// test 1 - returns true if the input is an array

// function checkArray(input) {
//   if (input.constructor === Array) {
//       return true;
//   }
//   else return false;
// }

// console.log(checkArray(1));
// console.log(checkArray([1]));

module.exports = [{
  text: 'arrayCheck should be a function',
  assertion: function () {
  expect(this.subject.toString()).includes('arrayCheck');
}
  },
  {
    text: 'arrayCheck should return true if an array is passed into the function',
    assertion: function () {

      const answer = this.subject([1,2,3])
      expect(answer).to.be.true

    }
  }
]