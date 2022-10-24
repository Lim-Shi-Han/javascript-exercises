const fibonacci = function(x) {
    if (x < 0) return "OOPS"
    if (x == 1 || x == 2) return 1;
    smallNum = 1;
    bigNum = 1;
    for (let i = 2; i < x; i++) {
        bigNum = bigNum + smallNum;
        smallNum = bigNum - smallNum;
    }
    return bigNum
};

// Do not edit below this line
module.exports = fibonacci;
