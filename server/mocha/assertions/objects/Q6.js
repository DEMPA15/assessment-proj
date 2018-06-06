const expect = require('chai').expect
module.exports =  [
    {
        text: 'doorKeys should exist',
        assertion: function () {
			expect(this.subject.toString()).include('doorKeys');
		}
    },
    {
        text: 'doorKeys should be an array',
        assertion: function () {
			expect(this.subject()).to.be.an('array');
		}
    },
    {
        text: 'doorKeys should contain correct values',
        assertion: function () {
			expect(this.subject()).include("red", "blue", "green", "brown");
		}
    },
]