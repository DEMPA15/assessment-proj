const expect = require('chai').expect

module.exports = [{
        text: 'Returns a string',
        assertion: function() {
            expect(this.subject('Lollipop')).to.be.a('string');
        }
    },
    {
        text: 'Returns name + " plays banjo" if the name starts with "R" or "r"',
        assertion: function() {
            expect(this.subject('Ryan')).to.equal('Ryan plays banjo');
            expect(this.subject('ryan')).to.equal('ryan plays banjo');
		}
    },
    {
        text: 'Returns name + " does not play banjo" if the name does not start with "R" or "r"',
        assertion: function() {
            expect(this.subject('craig')).to.equal('craig does not play banjo');
		}
    }
] 
