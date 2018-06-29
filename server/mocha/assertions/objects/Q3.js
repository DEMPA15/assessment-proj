const expect = require('chai').expect

module.exports = [{
        text: 'Should return a number',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            expect(this.subject(obj)).to.be.a('number')
        }
    },
    {
        text: 'Should return the objects correct length',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            let otherObj = {one: 1, two: 2, three: 3, four:4}
            let empty = {}
            expect(this.subject(obj)).to.equal(3)
            expect(this.subject(otherObj)).to.equal(4)
            expect(this.subject(empty)).to.equal(0)
        }
    },
] 