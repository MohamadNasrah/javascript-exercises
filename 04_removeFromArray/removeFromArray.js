let instances = 0;


const removeFromArray = function(arrs, ...args) {
  let savedArray = arrs.slice();
  let result = savedArray;
  let deleted = [];



  for (const arg of args) {
    getNumberOfInstances(result, arg);
    for (let i = 0; i < instances; i++) {
      for (const itm of result) {
        if (arg === itm) {
            deleted = result.splice(result.indexOf(itm) ,1);
        }
      }
    }
    
  }
  instances = 0;
  return result;
};

function getNumberOfInstances (array, insta) {
  for (const arr of array) {
    if (arr === insta) {instances++;}
  }
}



// if (arr === itm) {result = buffer.splice(buffer.indexOf(arr),1)}
// Do not edit below this line
module.exports = removeFromArray;
