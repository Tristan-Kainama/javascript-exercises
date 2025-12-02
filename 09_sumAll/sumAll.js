const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 % 1 !== 0 || num2 % 1 !== 0) return "ERROR";
    if (Number(num1) !== num1 || Number(num2) !== num2) return "ERROR";

    let result = 0;
    if (num1 < num2) {
        for(let i = num1; i <= num2; i++) {
            result += i;
        }
        return result;
    } else if (num1 > num2) {
        for(let i = num2; i <= num1; i++) {
            result += i;
        }
        return result;
    } else {
        return num1;
    }
};

// Do not edit below this line
module.exports = sumAll;
