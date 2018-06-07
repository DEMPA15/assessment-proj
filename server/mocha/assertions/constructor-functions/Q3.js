const expect = require('chai').expect

module.exports = [{
        text: 'Caveman should be a constructor function',
        assertion: function(){
			expect(new this.subject).to.be.an('object');
		}
    },
    {
        text: 'Caveman should have name, age, and weapon properties',
        assertion: function() {
            var fred = new this.subject('Fred', 45, 'stick')
			expect(fred.weapon).to.equal('stick')
			expect(fred.name).to.equal('Fred')
			expect(fred.age).to.equal(45)
		}
    },
    {
        text: "Caveman should have health and energy properties that equal 100",
        assertion: function() {
            var pebbles = new this.subject('Pebbles', 23, 'club')
			expect(pebbles.health).to.equal(100)
			expect(pebbles.energy).to.equal(100)
		}
    }
] 