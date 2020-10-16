module.exports = function reverse(n) {
    let result = 0;
    let digitOfNumber;
    n = Math.abs(n);
    while (n > 0) {
        digitOfNumber = n % 10;
        n = parseInt(n / 10);
        result = result * 10 + digitOfNumber;
    }
    return result;
};