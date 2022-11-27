exports.isPalindrome = (string) => {

    // find the length of the inputted string.
    const stringLength = string.length;

    // loop through half of the string
    for (let i = 0; i < stringLength / 2; i++) {
        // check if first and last string are same, if not, its not a palindrome otherwise it is.
        if (string[i] !== string[stringLength - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}