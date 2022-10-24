const palindromes = function (text) {
    let newText = text
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s+/g, "")
                    .toLowerCase();
    smallIndex = 0;
    largeIndex = newText.length - 1;
    while (smallIndex < largeIndex) {
        if (newText.charAt(smallIndex) !== newText.charAt(largeIndex)){
            return false;
        }
        smallIndex++;
        largeIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
