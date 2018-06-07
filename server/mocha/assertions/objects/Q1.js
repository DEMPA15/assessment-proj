const expect = require('chai').expect

module.exports = [{
        text: 'accessByDotNotation should be correct',
        assertion: function () {
            var duck = {
                name: "Stefan",
                pond: "Hyde Park Serpentine",
                bites: true,
                fluffiness: 100
            }
            expect(this.subject(duck)).to.equal("Stefan");
        }
    },
    {
        text: 'accessByDotNotation should use dot notation',
        assertion: function () {
            expect(this.subject.toString()).to.include('duck.name');
        }
    }
] 