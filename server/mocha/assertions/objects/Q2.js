
const expect = require('chai').expect

module.exports =  [
    {
        text: 'accessByBracketNotation should be correct',
        assertion: function () {
            var duck = {
                name: "Stefan",
                pond: "Hyde Park Serpentine",
                bites: true,
                fluffiness: 100
              }
			expect(this.subject(duck)).to.equal(true);
		}
    },
    {
        text: 'accessByBracketNotation should use bracket notation',
        assertion: function () {
			expect(this.subject.toString()).to.include("duck['bites']");
		}
    }
]