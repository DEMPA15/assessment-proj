const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function (){
           let arr = [10, 9, 11, 13]
            expect(this.subject(arr)).to.be.an('array')
        }
    },
    {
        text: 'Should use Array.prototype.filter',
        assertion: function (){
            expect(this.subject.toString()).include('.filter')
        }
    },
    {
        text: 'Array should consist of only numbers that are greater than 10',
        assertion: function (){
            let arr = [10, 9, 11, 13, 1, 2, 3, 4, 5, 18]
            expect(this.subject(arr)).not.include(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        }
    },
    {
        text: 'Array should contain all of the correct numbers',
        assertion: function (){
            let arr = [10, 9, 11, 13, 18, 6]
            expect(this.subject(arr)).include(11, 13, 18)
        }
    },
] 