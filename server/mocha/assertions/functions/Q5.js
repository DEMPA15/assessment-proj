const expect = require('chai').expect

module.exports = [{
        text: 'Returns a string in the correct format',
        assertion: function() {
            const audioLengths = ['01:02:55', '02:46:45', '08:34:12'];
            const playSpeeds = [2, 0.5, 1.2];

            // test length
            expect(this.subject(audioLengths[0], playSpeeds[0])).to.have.lengthOf(8);
            expect(this.subject(audioLengths[1], playSpeeds[1])).to.have.lengthOf(8);
            expect(this.subject(audioLengths[2], playSpeeds[2])).to.have.lengthOf(8);

            //test first colon
            expect(this.subject(audioLengths[0], playSpeeds[0]).charAt(2)).to.equal(':');
            expect(this.subject(audioLengths[1], playSpeeds[1]).charAt(2)).to.equal(':');
            expect(this.subject(audioLengths[2], playSpeeds[2]).charAt(2)).to.equal(':');

            //test second colon
            expect(this.subject(audioLengths[0], playSpeeds[0]).charAt(5)).to.equal(':');
            expect(this.subject(audioLengths[1], playSpeeds[1]).charAt(5)).to.equal(':');
            expect(this.subject(audioLengths[2], playSpeeds[2]).charAt(5)).to.equal(':');
        }
    },
    {
        text: 'Returns the correct length of the audio played at a different speed',
        assertion: function() {
            const audioLengths = ['01:02:55', '02:46:45', '08:34:12'];
            const playSpeeds = [2, 0.5, 1.2];

            expect(this.subject(audioLengths[0], playSpeeds[0])).to.equal('00:31:27');
            expect(this.subject(audioLengths[1], playSpeeds[1])).to.equal('05:33:30');
            expect(this.subject(audioLengths[2], playSpeeds[2])).to.equal('07:08:30');
		}
    },
] 