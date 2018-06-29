const expect = require('chai').expect

// 2. Write a JavaScript function to clone an inputed array.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-2.php

// test 1 - make sure it's a function

// test 2 - make sure it doesn't just return the same array

// test 3 - make sure it returns a copy of the inputed array

const arrayToClone = [1, 2, 3, 4, 5, 6]

function cloneArray(input) {
    const newArray = input.slice();
    return newArray;
}

console.log(cloneArray(arrayToClone));

module.exports = [{
  text: 'arrayCopier should exist',
  assertion: function () {
    expect(this.subject.toString()).includes('arrayCopier');
    }
  },
  {
    text: 'arrayCopier should return a new array',
    assertion: function () {
      const answer = this.subject([1,2,3])
    expect(answer).to.eql(answer)
    expect(answer).to.not.equal(answer);
    }
  }
]