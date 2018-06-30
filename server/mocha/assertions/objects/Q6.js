const expect = require('chai').expect

module.exports = [{
        text: 'Should return a string',
        assertion: function (){
            const contacts = {
                 Jon: {
                  house: 'Apartment',
                  children: {
                   Kyle: 4,
                   Jessica: 2
                  },
                  cars: [
                   {
                    make: 'Toyota',
                    model: '4-Runner',
                    color: 'blue'
                   },
                   {
                    make: 'Honda',
                    model: 'Civic',
                    color: 'silver'
                   }
                  ]
                 },
                 Bob: {
                  house: 'Condo',
                  children: {
                   Jan: 11,
                   Brittney: 15
                  },
                  cars: [
                   {
                    make: 'Ford',
                    model: 'F-150',
                    color: 'blue'
                   },
                   {
                    make: 'Honda',
                    model: 'Del Sol',
                    color: 'red'
                   }
                  ]
                 },
                }
            expect(this.subject(contacts, 'Bob', 'red')).to.be.a('string')
        }
    },
    {
        text: 'Should return the correct make of the vehicle',
        assertion: function (){
            const contacts = {
                Jon: {
                 house: 'Apartment',
                 children: {
                  Kyle: 4,
                  Jessica: 2
                 },
                 cars: [
                  {
                   make: 'Toyota',
                   model: '4-Runner',
                   color: 'blue'
                  },
                  {
                   make: 'Honda',
                   model: 'Civic',
                   color: 'silver'
                  }
                 ]
                },
                Bob: {
                 house: 'Condo',
                 children: {
                  Jan: 11,
                  Brittney: 15
                 },
                 cars: [
                  {
                   make: 'Ford',
                   model: 'F-150',
                   color: 'blue'
                  },
                  {
                   make: 'Honda',
                   model: 'Del Sol',
                   color: 'red'
                  }
                 ]
                },
               }
           expect(this.subject(contacts, 'Bob', 'red')).to.equal('Honda')
           expect(this.subject(contacts, 'Jon', 'blue')).to.equal('Toyota')
        }
    },
] 