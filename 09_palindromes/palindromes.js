const palindromes = function (str) {
    let punctuation = /[\. ,?!]/g;
    let cleaned = str.replace(punctuation, '').toLowerCase();
    let arrayed = cleaned.split("").reverse();
    let joined = arrayed.join("");
    if (cleaned === joined) {
        return true;
    } else {return false;}
    
};

// Do not edit below this line
module.exports = palindromes;
