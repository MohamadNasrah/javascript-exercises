const reverseString = function(string) {
let original = string;
let splitted = original.split("");
let reversed = [];
for (let i = splitted.length ; i >= 0; i-- ) {
 reversed.push(splitted[i]);
}
let fixed = reversed.join("")
return fixed;

};

// Do not edit below this line
module.exports = reverseString;
