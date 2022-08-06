const removeFromArray = function() {
    const args = Array.from(arguments)
    let originalArray = args[0];
    let removeArray = args.slice(1);
    return originalArray.filter((ele) => !removeArray.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
