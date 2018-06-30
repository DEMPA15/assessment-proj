const expect = require('chai').expect

module.exports = [{
        text: 'TestScores should be a constructor function',
        assertion: function(){
			expect(new this.subject).to.be.an('object');
		}
    },
    {
        text: 'TestScores should have the correct name and percent property and value',
        assertion: function() {
            var larry = new this.subject('Larry', 80)
            expect(larry.name).to.equal('Larry');
            expect(larry.percent).to.equal(80);
		}
    }
] 