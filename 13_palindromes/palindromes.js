const palindromes = function (str) {
    const cleanstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const charArray = cleanstr.split('');
    const reversedArray = charArray.reverse();
    const reversedCleanStr = reversedArray.join('');

    if (cleanstr == reversedCleanStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
