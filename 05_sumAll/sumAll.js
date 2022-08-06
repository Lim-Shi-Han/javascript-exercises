const sumAll = function(small, big) {
    if(!(Number.isInteger(small)) || !(Number.isInteger(big)) || small < 0 || big < 0) {
        return "ERROR";
    }
    if (big < small) {
        const temp = small;
        small = big;
        big = temp;
    }
    let result = 0;
    for (let i = small; i <= big; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
