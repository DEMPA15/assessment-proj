const expect = require('chai').expect

module.exports = [{
    text: 'It is a function',
    assertion: function(){
        expect(this.subject()).to.be.a('function')
    },
    text: 'It returns an array if there are capitalized letters',
    assertion: function(){
        expect(this.subject('HeLlo')).to.be.an('array')
    },
    text: 'It returns an string if there are no capitalized letters',
    assertion: function(){
        expect(this.subject('hello')).to.be.a('string')
    },
    text: 'Return the correct index values if there are capitalized letters',
    assertion: function(){
        expect(this.subject('HeLlo')).to.equal([0,2])
    },
    text: 'Return "There are no capitalized letters" if there are no capitalized letters',
    assertion: function(){
        const string = 'hello'
        expect(this.subject(string)).to.equal('There are no capitalized letters')
    }
}]