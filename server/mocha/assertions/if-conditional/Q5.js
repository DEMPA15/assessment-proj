const expect = require('chai').expect

module.exports = [
    {
    text: 'should be a function',
    assertion: function(){
        expect(this.subject).to.be.a('function')
    }
},
{
    text: 'should return an array',
    assertion: function(){
        const results = this.subject([1,2,5])
        expect(results).to.be.an('array')
    }
},
{
    text: 'should return an array with only the values that were included in the input',
    assertion: function(){
        const results = this.subject([1,2,5])
        expect(results).to.include(1,2,5)
    }
},
{
    text: 'should return an array of the same length',
    assertion: function(){
        const arr = [1,2,3]
        const results = this.subject(arr).length
        expect(results).to.equal(arr.length)
    }
},
{
    text: 'should return an array with even numbers on the left in ascending order and odd numbers on the right in descending order',
    assertion: function(){
        const results = this.subject([13,57,-9,-100,14])
        expect(results).to.have.members([-100,14,57,13,-9])
    },
}]