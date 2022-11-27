const { isPalindrome } = require('./palindrome')
, { intToRoman } = require('./romans')
, expect = require('chai').expect;

describe('Testing whether or not a string is palindrome', function() {
    it('Should return true for palindrome string', function(done) {
        expect(isPalindrome('noon')).to.equal(true);
        done();
    });

    it('Should return false for Non palindrome string', function(done) {
        expect(isPalindrome('thing')).to.equal(false);
        done();
    });

});

describe('Converting an integer to Roman Numeral Test', function() {
    it('Should return VIII', function(done) {
        expect(intToRoman(8)).to.equal('VIII');
        done();
    });

    it('Should return X', function(done) {
        expect(intToRoman(10)).to.equal('X');
        done();
    });

});
