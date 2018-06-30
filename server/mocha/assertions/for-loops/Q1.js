const expect = require('chai').expect

module.exports = [{
    text: 'Must be a function',
    assertion: function(){
    expect(this.subject).to.be.a('function');
  }
  },
  {
    text: 'must return the correct array',
    assertion: function () {
      const result = this.subject(8)
      expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8])
    }		
  }
]