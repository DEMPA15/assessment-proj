const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function (){
            let arr = [3, 6, 45, 0]
            expect(this.subject(arr)).to.be.an('array')
        }
    },
    {
        text: 'Should use Array.prototype.sort',
        assertion: function (){
            let arr = [3, 6, 45, 0]
            expect(this.subject.toString()).include('.sort')
        }
    },
    {
        text: 'Array should be sorted from largest to smallest',
        assertion: function (){
            let arr = [3, 45, 6, 0]
            expect(this.subject(arr)[0]).to.equal(45)
            expect(this.subject(arr)[1]).to.equal(6)
            expect(this.subject(arr)[2]).to.equal(3)
            expect(this.subject(arr)[3]).to.equal(0)
        }
    },
] 