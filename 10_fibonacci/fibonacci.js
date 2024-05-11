const fibonacci = function(num) {
    let loops = Number(num)
    let first = 0;
    let second = 1;

    if (num < 0) return "OOPS";
    if (Number(num) === 0) return 0;
    for (let i = 1; i < loops; i++) {
        let buffer = first + second;
        first = second;
        second = buffer;
    }
    return second;

};

// Do not edit below this line
module.exports = fibonacci;
