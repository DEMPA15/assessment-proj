const expect = require('chai').expect

module.exports = [{
    text: 'it is a function',
    assertion: function(){
        expect(this.subject()).to.be.a('function')
    },
    text: 'returns a number',
    assertion: function(){
        const result = this.subject([1,5,600])
        expect(result).to.be.a('number')
    },
    text: 'returns the highest number',
    assertion: function(){
        expect(this.subject([5,10,500,6])).to.equal(500)
    }
}]