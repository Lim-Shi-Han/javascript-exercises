const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let result = ""
    for (times; times > 0; times--) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
