const expect = require('chai').expect

module.exports = [{
    text: 'Should be a function',
    assertion: function(){
    expect(this.subject).to.be.a('function');
  }
  },
  {
    text: 'Should have grade property in each object',
    assertion: function () {
      const studentArray = [{name: 'David',percentage: 80},{name: 'Vinoth',percentage: 77},{name: 'Divya',percentage: 88},{name: 'Ishitha',percentage: 95},{name: 'Thomas',percentage: 68},{name: 'Anna',percentage: 32},{name: 'Emmanuel', percentage: 90}]
      const result = this.subject(studentArray)
      expect(result[1].grade).to.exist
      expect(result[2].grade).to.exist
    }		
  },
  {
    text: 'Should be the correct grade for each student',
    assertion: function () {
      const studentArray = [{name: 'David',percentage: 80},{name: 'Vinoth',percentage: 77},{name: 'Divya',percentage: 88},{name: 'Ishitha',percentage: 95},{name: 'Thomas',percentage: 68},{name: 'Anna',percentage: 32},{name: 'Emmanuel', percentage: 90}]
      const result = this.subject(studentArray)
      expect(result[0].grade).to.equal('B' || 'b')
      expect(result[2].grade).to.equal('B' || 'b')
      expect(result[4].grade).to.equal('D' || 'd')
    }		
  }
]