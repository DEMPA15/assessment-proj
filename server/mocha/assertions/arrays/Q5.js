const expect = require('chai').expect

module.exports = [{
        text: 'Returns a number',
        assertion: function (){
            expect(this.subject(["a", "a", "b", "b"], ["a", "c", "b", "d"])).to.be.a('number');
            expect(this.subject(["a", "a", "c", "b"], ["a", "a", "b",  ""])).to.be.a('number');
            expect(this.subject(["a", "a", "b", "c"], ["a", "a", "b", "c"])).to.be.a('number');
            expect(this.subject(["b", "c", "b", "a"], ["",  "a", "a", "c"])).to.be.a('number');
            expect(this.subject(["a", "b", "d", "c"], ["", "", "d", "d"])).to.be.a('number');
        }
    },
    {
      text: 'Returns the correct answer',
      assertion: function (){
        expect(this.subject(["a", "a", "b", "b"], ["a", "c", "b", "d"])).to.equal(6);
        expect(this.subject(["a", "a", "c", "b"], ["a", "a", "b",  ""])).to.equal(7);
        expect(this.subject(["a", "a", "b", "c"], ["a", "a", "b", "c"])).to.equal(16);
        expect(this.subject(["b", "c", "b", "a"], ["",  "a", "a", "c"])).to.equal(0);
        expect(this.subject(["a", "b", "d", "c"], ["", "", "d", "d"])).to.equal(3);
      }
  }
]