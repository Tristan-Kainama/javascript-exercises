const reverseString = function(string) {
    const splittedString = string.split("");
    let result = "";
    for (let i = splittedString.length; i > 0; i--) {
        result += splittedString[i-1];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
