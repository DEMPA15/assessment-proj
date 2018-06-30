const expect = require('chai').expect

module.exports = [
    {
    text: 'should be a function',
    assertion: function(){
        expect(this.subject).to.be.a('function')
    }
},
{
    text: 'should return a number',
    assertion: function(){
        const result = this.subject([1,5,600])
        expect(result).to.be.a('number')
    }
},
{
    text: 'should return the highest number',
    assertion: function(){
        expect(this.subject([-5,-10,-500,-1])).to.equal(-1)
    }
}]