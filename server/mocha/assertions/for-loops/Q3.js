const expect = require('chai').expect

module.exports = [{
    text: 'Should be a function',
    assertion: function(){
    expect(this.subject).to.be.a('function');
  }
  },
  {
    text: 'should accurately display whether the number is even or odd',
    assertion: function () {
      const result = this.subject()
      expect(result[0]).include('even' || 'Even' || 'EVEN')
      expect(result[3]).include('odd' || 'Odd' || 'ODD')
      expect(result[9]).include('odd' || 'Odd' || 'ODD')
    }		
  }
]