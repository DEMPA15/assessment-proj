const expect = require('chai').expect

module.exports = [{
        text: 'addNumbers should return an array',
        assertion: function(){
			expect(this.subject(4)).to.be.an('array');
		}
    },
    {
        text: 'addNumbers should fill the returning array with numbers up to (but not including) the value passed in',
        assertion: function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7]
            expect(this.subject(8)).include(1, 2, 3, 4, 5, 6, 7);
            expect(this.subject(8)).not.include(8);
		
		}
    }
] 