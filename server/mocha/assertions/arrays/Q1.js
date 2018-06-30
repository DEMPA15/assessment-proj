const expect = require('chai').expect

module.exports = [{
  text: 'reverseMe should exist',
  assertion: function () {
    expect(this.subject.toString()).includes('reverseMe');
    }
  },
  {
    text: 'reverseMe should reverse an array',
    assertion: function () {
      const arr = [1,2,3]
      expect(this.subject(arr)[0]).to.equal(3)
      expect(this.subject(arr)[1]).to.equal(2)
      expect(this.subject(arr)[2]).to.equal(1)
      }
    }
]