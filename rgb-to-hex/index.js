// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

/* The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

var assert = require('assert')

function makeParamValid(param) { 
// Rounds given parameter to nearest valid rgb value if needed
	if (param < 0) {
		return 0; 
	} else if (param > 255) { 
		return 255; 
	} else {
		return param; 
	}
}

function convertToHexString(number){
// Converts an integer to its hexadecimal value and ensures that the string is two characters
	var hexString = number.toString(16).toUpperCase();
	if (hexString.length == 1) {
		return "0".concat(hexString)
	} else {
		return hexString;
	}
}

function rgb(r, g, b){
   
   var hexArray = []; 

   hexArray.push(convertToHexString(makeParamValid(r))); 
   hexArray.push(convertToHexString(makeParamValid(g)));
   hexArray.push(convertToHexString(makeParamValid(b)));

   return hexArray[0].concat(hexArray[1], hexArray[2]);

}



assert.equal(makeParamValid(-12), 0)//, "Should return 0, instead returns: "); 
assert.equal(makeParamValid(255), 255)//, "Should return 255, instead returns: ")
assert.equal(makeParamValid(300), 255)//, "Should return 255, instead returns: ")

assert.equal(convertToHexString(255), "FF")
assert.equal(convertToHexString(0), "00")
assert.equal(convertToHexString(211), "D3")

assert.equal(rgb(238,130,238), "EE82EE")
assert.equal(rgb(75, 0, 130), "4B0082")
assert.equal(rgb(152,251,152), "98FB98")

