const expect = require('chai').expect

module.exports = [{
        text: 'canYouHearMe should return a string',
        assertion: function(){
            function hello(){
                return "hI"
            }
			expect(this.subject('hi', hello)).to.be.a('string');
		}
    },
    {
        text: 'canYouHearMe should call hello 10 times',
        assertion: function () {
			function hello(){
                return "hI"
            }
            expect(this.subject('', hello)).to.equal("hIhIhIhIhIhIhIhIhIhI")
		
		}
    },
    {
        text: 'canYouHearMe should add result of hello() invoked 10 times to param',
        assertion: function () {
			function hello(){
                return "hI"
            }
            expect(this.subject('um ', hello)).to.equal("um hIhIhIhIhIhIhIhIhIhI")
		
		}
    }
] 