const expect = require('chai').expect

module.exports = [{
    text: 'should be a function',
    assertion: function () {
            expect(this.subject).to.be.a('function');
        },
    },
    {
    text: 'should return the larger number',
    assertion: function () {
        const first = 1;
        const second = 2;
        const result = this.subject(first, second);
        expect(result).to.equal(second)
    }
}]