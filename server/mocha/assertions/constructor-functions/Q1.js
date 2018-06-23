const expect = require('chai').expect

module.exports = [{
        text: 'EgyptianGoddesses should be a constructor function',
        assertion: function(){
			expect(new this.subject).to.be.an('object');
		}
    },
    {
        text: 'EgyptianGoddesses should have the correct name, oversees, strength and weakness properties',
        assertion: function() {
            var seshat = new this.subject('Seshat', 'Written Word', 'Clever and Logical', 'Not in touch with her emotions')
			expect(seshat.name).to.equal('Seshat')
			expect(seshat.oversees).to.equal('Written Word')
			expect(seshat.strength).to.equal('Clever and Logical')
			expect(seshat.weakness).to.equal('Not in touch with her emotions')
		}
    }
] 