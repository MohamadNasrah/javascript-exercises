const removeFromArray = function(arrs, itm) {
  let buffer = arrs;
  let result = [];

  for (const arr of buffer) {
    if (arr === itm) {result = buffer.splice(buffer.indexOf(arr),1)}
  }
  return buffer;
};


// Do not edit below this line
module.exports = removeFromArray;
