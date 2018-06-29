const expect = require('chai').expect

module.exports = [{
        text: 'Should return an object',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            expect(this.subject(obj)).to.be.an('object')
        }
    },
    {
        text: 'Object should not contain the rollno property',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            expect(this.subject(obj)).to.not.have.property('rollno')
        }
    },
] 