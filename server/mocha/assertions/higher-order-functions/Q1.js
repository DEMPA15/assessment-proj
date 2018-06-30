const expect = require('chai').expect

module.exports = [{
        text: 'Should return a number',
        assertion: function (){
            let arr = [1, 2, 3, 4]
            expect (this.subject(arr)).to.be.a("number")
        }
    },
    {
        text: 'Should use Array.prototype.reduce',
        assertion: function (){
            expect(this.subject.toString()).include('.reduce')
        }
    },
    {
        text: 'Number should be the sum of all numbers in the array',
        assertion: function (){
            let arr = [1, 2, 3, 4]
            expect(this.subject(arr)).to.equal(10)
        }
    }
] 