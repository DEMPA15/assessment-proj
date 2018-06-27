const expect = require('chai').expect

module.exports = [{
        text: 'Returns a number',
        assertion: function() {
            expect(this.subject([ -1, -1, 5, 2, -7])).to.be.a('number');
            expect(this.subject([24, -47, 33, 33, 24, 33, -99])).to.be.a('number');
            expect(this.subject([1, 1, 2, 3, 5, 8, 13])).to.be.a('number');
            expect(this.subject([99, 88, 99, 88, -47, 200, 99, 88, 77])).to.be.a('number');
        }
    },
    {
        text: 'Returns the sum of all unique integers',
        assertion: function() {
            expect(this.subject([ -1, -1, 5, 2, -7])).to.equal(-1);
            expect(this.subject([24, -47, 33, 33, 24, 33, -99])).to.equal(-89);
            expect(this.subject([1, 1, 2, 3, 5, 8, 13])).to.equal(32);
            expect(this.subject([99, 88, 99, 88, -47, 200, 99, 88, 77])).to.equal(417);
		}
    },
] 