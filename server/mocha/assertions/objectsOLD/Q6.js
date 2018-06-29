const expect = require('chai').expect
module.exports = [{
        text: 'doorKeys should exist',
        assertion: function () {
            expect(this.subject.toString()).include('doorKeys');
        }
    },
    {
        text: 'doorKeys should be an array',
        assertion: function () {
            const doors = {red: "cedar", blue: "stone", green: "pine", brown: "mahogany"}
            expect(this.subject(doors)).to.be.an('array');
        }
    },
    {
        text: 'doorKeys should contain correct values',
        assertion: function () {
            const doors = {red: "cedar", blue: "stone", green: "pine", brown: "mahogany"}
            expect(this.subject(doors)).include("red", "blue", "green", "brown");
        }
    },
]