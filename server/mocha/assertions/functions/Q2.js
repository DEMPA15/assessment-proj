const expect = require('chai').expect

module.exports = [{
        text: 'Returns false if one or both of the parameters is not a number',
        assertion: function() {
            expect(this.subject('weird', 'math')).to.be.false;
            expect(this.subject(47, "Don't work please")).to.be.false;
        }
    },
    {
        text: 'Returns the correct value if both parameters are numbers',
        assertion: function() {
            expect(this.subject(1, 2)).to.equal(1);
            expect(this.subject(3, 12)).to.equal(3);
            expect(this.subject(-47, 13)).to.equal(5);
		}
    },
] 