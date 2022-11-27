const { isPalindrome } = require('./palindrome')
    , { intToRoman } = require('./romans')
    , prompt = require('prompt-sync')();

// take input
const isPalindromeString = prompt('Enter a string to check whether or not it is palindrome: ');
const PalindromeOutput = isPalindrome(isPalindromeString);
console.log(PalindromeOutput);
const convertToRoman = prompt('Enter a number to convert to a Roman Numeral: ');
const romanNumeral = intToRoman(convertToRoman);
console.log(romanNumeral);