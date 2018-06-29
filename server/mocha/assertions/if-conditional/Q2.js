const expect = require('chai').expect

module.exports = [{
    text: 'should be a function',
    assertion: function(){
        expect(this.subject).to.be.a('function')
    }
},
{
    text: 'should return "The sign is +" if the product is a positive integer',
    assertion: function(){
        const arr1 = [1,2,3]
        const arr3 = [-1,-2,3]
        expect(this.subject(arr1)).to.equal("The sign is +")
    }
},
{
    text: 'should return "The sign is -" if the product is a negative integer',
    assertion: function(){
        const arr2 = [1,-2,3]
        const arr4 = [-1,-2,-3]
        expect(this.subject(arr2)).to.equal("The sign is -")
    }
}]