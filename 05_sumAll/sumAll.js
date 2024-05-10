const sumAll = function(num1, num2) {
    let allNums = [];
    let result = 0;
    let numOne;
    let numTwo;
     
    if (num1 <= 0 || num2 <= 0 
        || isNaN(num1) || isNaN(num2) 
        || typeof num1 === 'string' || typeof num2 === 'string'        
    ) {
        return "ERROR"
    } else {
        if(num1 < num2) {numOne = num1; numTwo = num2;}
        else if (num1 > num2) {numOne = num2; numTwo = num1;}

        for (let i = numOne; i <= numTwo; i++) {
            let buffer = i;
            allNums.push(buffer);
        }
        for (const num of allNums) {
            result += num;
        }
        return result;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
