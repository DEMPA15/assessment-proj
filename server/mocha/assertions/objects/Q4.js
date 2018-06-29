const expect = require('chai').expect

module.exports = [{
        text: 'Should return an array',
        assertion: function(){
            const books = [
                 {
                  title: 'The Road Ahead',
                  author: 'Bill Gates',
                  readingStatus: true
                 },
                 {
                  title: 'Mistborn',
                  author: 'Brandon Sanderson',
                  readingStatus: true
                 },
                 {
                  title: 'Mockingjay',
                  author: 'Suzanne Collins',
                  readingStatus: false
                 }
                ]
          expect(this.subject(books)).to.be.an('array');
        }
    },
    {
        text: 'Each array element should contain a book title and author',
        assertion: function () {
            const books = [
                {
                 title: 'The Road Ahead',
                 author: 'Bill Gates',
                 readingStatus: true
                },
                {
                 title: 'Mistborn',
                 author: 'Brandon Sanderson',
                 readingStatus: false
                },
                {
                 title: 'Mockingjay',
                 author: 'Suzanne Collins',
                 readingStatus: false
                }
               ]
            expect(this.subject(books)[0]).include('Mistborn by Brandon Sanderson');
            expect(this.subject(books)[1]).include('Mockingjay by Suzanne Collins');
          }
    },
    {
        text: 'Should contain all of the correct values',
        assertion: function() {
            const books = [
                {
                 title: 'The Road Ahead',
                 author: 'Bill Gates',
                 readingStatus: true
                },
                {
                 title: 'Mistborn',
                 author: 'Brandon Sanderson',
                 readingStatus: false
                },
                {
                 title: 'Mockingjay',
                 author: 'Suzanne Collins',
                 readingStatus: false
                }
               ]
            expect(this.subject(books)).include('Mistborn by Brandon Sanderson', 'Mockingjay by Suzanne Collins')
        }
    }
] 