const expect = require('chai').expect

module.exports = [{
    text: 'Should be a function',
    assertion: function(){
    expect(this.subject).to.be.a('function');
  }
  },
  {
    text: 'Should return the correct array',
    assertion: function () {
      const result = this.subject('hello')
      expect(result).to.be.a('string')
    }		
  },
  {
    text: 'Should return a string with each character repeated once',
    assertion: function () {
      const result = this.subject('ryan')
      expect(result).to.equal('rryyaann')
    }		
  }
]