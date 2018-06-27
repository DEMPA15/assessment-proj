const expect = require('chai').expect

module.exports = [{
        text: 'Returns an array',
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            expect(this.subject(birds, geese)).to.be.an('array');
        }
    },
    
    {
        text: "The returned array doesn't include any 'geese'",
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            expect(this.subject(birds, geese)).to.not.include("African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher");
        }
    },
    {
        text: 'The returned array includes all the non-geese from the input array',
        assertion: function() {
            const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
            const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
            const random = ['this is random', 'so is this', 'just in case they know the birds array from code wars'];
            expect(this.subject(birds, geese)).to.include("Mallard", "Hook Bill", "Crested", "Blue Swedish");
            expect(this.subject(random, geese)).to.include('this is random', 'so is this', 'just in case they know the birds array from code wars')
		}
    },
] 