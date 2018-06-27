const expect = require('chai').expect

module.exports = [{
    text: 'Should be a function',
    assertion: function(){
    expect(this.subject).to.be.a('function');
  }
  },
  {
    text: 'Should return a number',
    assertion: function () {
      const sampleArray = [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]
      const result = this.subject(sampleArray)
      expect(result).to.be.a('number')
    }		
  },
  {
    text: 'Should return the correct answer',
    assertion: function () {
      const sampleArray = [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]
      const result = this.subject(sampleArray)
      expect(result).to.equal(44)
    }		
  }
]