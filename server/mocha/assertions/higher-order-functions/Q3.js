const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr, 1)).to.be.an('array')
        }
    },
    {
        text: 'Should use Array.prototype.splice',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject.toString()).include('.splice')
        }
    },
    {
        text: "Should replace the correct element in the array with the word 'replaced'",
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr, 2)).include('replaced')
            expect(this.subject(arr, 2)).not.include('ho')
            expect(this.subject(arr, 2)[2]).to.equal('replaced')
        }
    },
] 