const expect = require('chai').expect

module.exports =  [
    {
        text: 'getVals should exist',
        assertion: function () {
					expect(this.subject.toString()).include('getVals');
		}
    },
    {
        text: 'getVals should return an array',
        assertion: function () {
			
					var people = {
						anne: 23,
						brandon: 28,
						charles: 33,
						diana: 20,
					}
					var returned = this.subject(people)
					var correct = returned[0] === 23 &&
									returned[1] === 28 &&
										returned[2] === 33 &&
										returned[3] === 20
					expect(correct).to.equal(true);
		}
    },
]