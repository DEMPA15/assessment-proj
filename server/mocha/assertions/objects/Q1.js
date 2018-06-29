const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function (){
            let obj = {1: 'hi', 2: 'hey', 3: 'bye'}
            expect (this.subject(obj)).to.be.an("array")
        }
    },
    {
        text: 'Array should contain all keys of the passed in object',
        assertion: function (){
            let obj = {1: 'hi', 2: 'hey', 3: 'bye'}
            let otherObj = {one: 1, two: 2, three: 3, four:4}
            expect(this.subject(obj)).include('1', '2', '3')
            expect(this.subject(otherObj)).include('one', 'two', 'three', 'four')
        }
    },
] 