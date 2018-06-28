const expect = require('chai').expect

module.exports = [{
    text: 'should be a function',
    assertion: function(){
        expect(this.subject()).to.be.a('function')
    },
    text: 'If the sign of product is +, should return "The sign is +"',
    assertion: function(){
        const arr1 = [1,2,3]
        const arr3 = [-1,-2,3]
        expect(this.subject(arr1)).to.return("The sign is +"),
        expect(this.subject(arr3)).to.return("The sign is +")
    },
    text: 'If the sign of the product is -, should return "The sign is -"',
    assertion: function(){
        const arr2 = [1,-2,3]
        const arr4 = [-1,-2,-3]
        expect(this.subject(arr2)).to.return("The sign is -")
        expect(this.subject(arr4)).to.return("The sign is -")
    }
}]