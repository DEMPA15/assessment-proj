const expect = require('chai').expect

module.exports = [{
        text: 'person.moveCities should exist',
        assertion: function () {
            expect(this.subject()).to.have.property('moveCities');
        }
    },
    {
        text: 'person.moveCities should be a function',
        assertion: function () {
            expect(this.subject().moveCities).to.be.a('function');
        }
    },
    {
        text: "person.moveCities should properly change object's city property",
        assertion: function () {
            var person = this.subject()
            person.moveCities("Queenstown, NZ")
            var correct = person.city === "Queenstown, NZ"
            expect(correct).to.equal(true);
        }
    }
]