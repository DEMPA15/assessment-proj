const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr)).to.be.an('array')
        }
    },
    {
        text: 'Should use Array.prototype.map',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject.toString()).include('.map')
        }
    },
    {
        text: 'Should return an array with all elements capitalized',
        assertion: function (){
            let arr = ['hi', 'hiya', 'ho', 'bye']
            expect(this.subject(arr)).include('HI', 'HIYA', 'HO', 'BYE')
        }
    },
] 