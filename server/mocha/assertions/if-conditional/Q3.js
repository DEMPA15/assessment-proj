const expect = require('chai').expect

module.exports = [
    {
    text: 'should be a function',
    assertion: function(){
        expect(this.subject).to.be.a('function')
    }
},
{
    text: 'should return an array if there are capitalized letters',
    assertion: function(){
        expect(this.subject('HeLlo')).to.be.an('array')
    }
},
{
    text: 'should return a string if there are no capitalized letters',
    assertion: function(){
        expect(this.subject('hello')).to.be.a('string')
    }
},
{
    text: 'should return the correct index values if there are capitalized letters',
    assertion: function(){
        const results = this.subject('HeLlo')
        const arr = [0, 2]
        expect(results).to.eql(arr)
    }
},
{
    text: 'should return "There are no capitalized letters" if there are no capitalized letters',
    assertion: function(){
        const string = 'hello'
        expect(this.subject(string)).to.equal('There are no capitalized letters')
    }
}]