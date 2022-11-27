exports.intToRoman = (number) => {    
    // get the map of all of the numerals to loop through
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      },
        romanNum = '';
        // loop through each key
        for (let i of Object.keys(roman)) {
        // get non decimal integer
          let queue = Math.floor(number / roman[i]);
          number -= queue * roman[i];
          romanNum += i.repeat(queue);
        }
      
        return romanNum;
}