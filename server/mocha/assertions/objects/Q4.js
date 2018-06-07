const expect = require('chai').expect

module.exports = [{
    text: 'keyAccessor should exist',
    assertion: function () {
      expect(this.subject.toString()).includes('keyAccessor');
    }
  },
  {
    text: 'keyAccessor should return an array of objects',
    assertion: function () {
      var names = ["anne", "brandon", "charles", "diana"]

      var people = {
        anne: {
          city: "New York",
          age: 23
        },
        brandon: {
          city: "London",
          age: 28
        },
        charles: {
          city: "Seattle",
          age: 33
        },
        diana: {
          city: "Los Angeles",
          age: 20
        },
      }
      var returned = this.subject(names, people)
      var correct = returned[0].city === "New York" &&
        returned[1].city === "London" &&
        returned[2].city === "Seattle" &&
        returned[3].city === "Los Angeles"
      expect(correct).to.equal(true);
    }
  },
]