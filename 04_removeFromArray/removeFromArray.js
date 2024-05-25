const removeFromArray = (array, ...argsToRemove) => {
    argsToRemove.forEach(arg => {
        while (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
