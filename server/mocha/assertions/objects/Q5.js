const expect = require('chai').expect

module.exports = [{
        text: 'Should return the correct value',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            expect(this.subject(obj, 'name')).to.equal('David Rayy')
            expect(this.subject(obj, 'sclass')).to.equal('VI')
        }
    },
    {
        text: 'Should return ‘No property found.’ if the property does not exist',
        assertion: function (){
            let obj = { name : "David Rayy", sclass : "VI", rollno : 12}
            expect(this.subject(obj, 'hi')).to.equal('No property found.')
            expect(this.subject(obj, 'any')).to.equal('No property found.')
        }
    },
] 