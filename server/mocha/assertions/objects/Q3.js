const expect = require('chai').expect

module.exports = [{
        text: 'moveCities should exist',
        assertion: function () {
            expect(this.subject()).to.have.property('moveCities');
        }
    },
    {
        text: 'moveCities should be a function',
        assertion: function () {
            expect(this.subject().moveCities).to.be.a('function');
        }
    },
    {
        text: "moveCities should properly change the object's city property",
        assertion: function () {
            var person = this.subject()
            person.moveCities("Queenstown, NZ")
            var correct = person.city === "Queenstown, NZ"
            expect(correct).to.equal(true);
        }
    }
]