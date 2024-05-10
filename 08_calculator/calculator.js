const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2 ) {
  return num1 - num2;
	
};

const sum = function(arr) {
  let result= 0;
	for (const elm of arr) {
    result += Number(elm);
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
	for (const elm of arr) {
    result *= Number(elm);
  }
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {return 1}
  else {
    let result = 1;
    if (num === 1) {return result}
    result = num * factorial(num -1)
    return result;
    
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
