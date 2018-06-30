const expect = require('chai').expect

module.exports = [{
        text: 'Should return strings in alphabetical order',
        assertion: function (){
            let numericArray = [33, 100, 9];
            expect(this.subject(numericArray)[0]).to.equal(9)
            expect(this.subject(numericArray)[1]).to.equal(33)
            expect(this.subject(numericArray)[2]).to.equal(100)
        }
    },
    {
      text: 'Should return numbers in numeric order (least to greatest)',
      assertion: function (){
          let wordArray = ['c','a','b']
          expect(this.subject(wordArray)[0]).to.equal('a')
          expect(this.subject(wordArray)[1]).to.equal('b')
          expect(this.subject(wordArray)[2]).to.equal('c')
      }
  }
]

// const alphabeticArray = ['Washer', 'Dryer', 'Yarn', 'Acid', 'Lovely'];

// const numericArray = [33, 100, 9, 45, 1, 330, 3200];

// function returnSortedArray(input) {
//   function sortNumber(a,b) {
//     return a-b;
//   }
//     if (typeof input[0] === 'number') {
//         function sortNumber(a, b) {
//             return a - b;
//         }

//         return input.sort(sortNumber);
//     }
//     else return input.sort();
// }