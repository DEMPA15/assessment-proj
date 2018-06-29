const expect = require('chai').expect

// const numbersToTest = [6, 99, -2, 14, 56];

// function differenceInNumbers (ages) {

//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//         diff = max - min

//     return [min, max, diff]
// }

// console.log(differenceInNumbers(numbersToTest));

module.exports = [{
  text: 'Returns an array',
  assertion: function () {
    let arr = [20,32,10]
    expect(this.subject(arr)).to.be.an("array");
    }
  },
  {
    text: 'Returns an array with the correct order of youngest age, oldest age, and the difference between youngest and oldest ages',
    assertion: function () {
      const arr = [19,22,29]
      expect(this.subject(arr)[0]).to.equal(19)
      expect(this.subject(arr)[1]).to.equal(29)
      expect(this.subject(arr)[2]).to.equal(10)
      }
    }
]