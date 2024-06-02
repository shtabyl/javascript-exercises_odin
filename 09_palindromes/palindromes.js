const palindromes = function (str) {
    const strLettersOnly = str.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
    return Array.from(strLettersOnly).reverse().join('') === strLettersOnly;
};

// Do not edit below this line
module.exports = palindromes;
