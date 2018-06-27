const expect = require('chai').expect

module.exports = [{
        test: 'Returns an array',
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            expect(this.subject(birds).to.be.an('array'));
        }
    },
    
    {
        text: "The returned array doesn't include any 'geese'",
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            expect(this.subject(birds)).to.not.include("African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher");
        }
    },
    {
        text: 'The returned array includes all the non-geese from the input array',
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            expect(this.subject(birds)).to.include("Mallard", "Hook Bill", "Crested", "Blue Swedish")
		}
    },
] 