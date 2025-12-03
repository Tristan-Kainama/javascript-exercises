const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else if (num == 1 || num == 2) {
        return 1;
    }

    let num1 = 1;
    let num2 = 1;
    let result = 0;

    for (let i = 2; i < num;i++) {
        result = num1 + num2;

        const temp = num2;
        num2 = result;
        num1 = temp;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
