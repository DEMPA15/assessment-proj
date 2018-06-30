const expect = require('chai').expect

module.exports = [{
        text: 'Should return a boolean',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr, 'hi')).to.be.a('boolean')
        }
    },
    {
        text: 'Should use Array.prototype.includes',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject.toString()).include('.includes')
        }
    },
    {
        text: 'Should return true if the string is in the array',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr, 'hi')).to.equal(true)
        }
    },
    {
        text: 'Should return false if the string is not in the array',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr, 'jo')).to.equal(false)
        }
    },
] 