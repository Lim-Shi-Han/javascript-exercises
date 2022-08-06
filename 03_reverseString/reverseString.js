const reverseString = function(word) {
    const wordList = word.split("");
    const rWordList = wordList.reverse();
    return wordList.join("")
};

// Do not edit below this line
module.exports = reverseString;
