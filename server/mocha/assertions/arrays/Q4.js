const expect = require('chai').expect

module.exports = [{
  text: 'Should return an array',
  assertion: function () {
    expect(this.subject).to.be.a('function');
    }
  },
  {
    text: 'Should contain no duplicate numbers',
    assertion: function () {
      let duplicateNumericArray = [1, 1, 2, 2, 3, 2, 1, 5]
      expect(this.subject(duplicateNumericArray)[0]).to.equal(1)
      expect(this.subject(duplicateNumericArray)[1]).to.equal(2)
      expect(this.subject(duplicateNumericArray)[2]).to.equal(3)
      expect(this.subject(duplicateNumericArray)[3]).to.equal(5)
      }
    }
]

// const duplicateNumericArray = [1, 1, 2, 2, 3, 2, 1, 4]

// function removeDuplicates(input) {
//   return input.filter(function(value, index) {
//     return input.indexOf(value) == index});
// }

// console.log(removeDuplicates(duplicateNumericArray));
