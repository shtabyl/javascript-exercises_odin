const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    // Gauss's formula insensitive to min or max number
    return (start + end) * (Math.abs(end - start) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
