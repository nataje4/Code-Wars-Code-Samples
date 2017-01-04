/* Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);
a.add(b); // should return Vector([4,6,8])
a.subtract(b); // should return Vector([-2,-2,-2])
a.dot(b); // should return 1*3+2*4+3*5 = 26
a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
a.add(c); // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString function, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals function, so that two vectors who have the same components are equal */

// link: https://www.codewars.com/kata/vector-class/train/javascript

var assert = require('assert')

function toTheSecondPower(num) {
	return num * num;
}

function addNumbers (x,y) {
	return x+y; 
}

var Vector = function (components) {
  // TODO: Finish the Vector class.
  this.components = components;
  this.hasSameLength = function(otherVector) {
  	if (components.length !== otherVector.components.length) {
  		return false; 
  	} else {
  		return true; 
  	}
  }; 
  this.add = function(otherVector) {
  	if (!this.hasSameLength(otherVector)) {
  		throw "These vectors cannot be added"; 
  	}

  	var sum = [];

  	for (i=0; i<this.components.length; i++) {
  		sum.push(this.components[i] + otherVector.components[i])
  	}

  	return new Vector(sum); 
  };
  this.subtract = function(otherVector) {
  	if (!this.hasSameLength(otherVector)) {
  		throw "These vectors cannot be subtracted"; 
  	}

  	var difference = [];

  	for (i=0; i<this.components.length; i++) {
  		difference.push(this.components[i] - otherVector.components[i])
  	}

  	return new Vector(difference); 
  }
  this.dot = function(otherVector) {
  	if (!this.hasSameLength(otherVector)) {
  		throw "The dot product cannot be calculated"; 
  	}

  	var dotProductArray = [];

  	for (i=0; i<this.components.length; i++) {
  		dotProductArray.push(this.components[i] * otherVector.components[i])
  	}

  	return dotProductArray.reduce(addNumbers)
  	
  };
  this.norm = function() {
  	return Math.sqrt(this.components.map(toTheSecondPower).reduce(addNumbers));
  }
  this.equals = function(otherVector) {
  	
  	if (!this.hasSameLength(otherVector)) {
  		return false
  	};

  	for (i=0; i < this.components.length; i++) {
  		if (this.components[i] !== otherVector.components[i]) {
  			return false 
  		}
  	}

  	return true;

  }
  this.toString = function() { return "(" + this.components.toString() + ")"}
};

var a = new Vector([1, 2]); 
var b = new Vector([1, 1]); 
var c = new Vector([4, 0]); 
var d = new Vector([1, 2, 3, 4])
var aa = new Vector([1, 2]); 
var bb = new Vector([1, 1]); 
var cc = new Vector([4, 0]); 

//tests on Vector add function

assert.equal(a.add(b), [2, 3].toString());
assert.equal(a.add(c), [5, 2].toString());
assert.equal(b.add(a), [2, 3].toString());
assert.equal(a.add(d), "These vectors cannot be added")

//tests on Vector subtract function 
assert.equal(a.subtract(b), [0, 1].toString());
assert.equal(a.subtract(c), [-3, 2].toString());
assert.equal(b.subtract(a), [0, -1].toString());
assert.equal(a.subtract(d), "These vectors cannot be subtracted")

//tests on Vector dot function 

assert.equal(a.dot(b), [1, 2].toString());
assert.equal(a.dot(c), [4, 0].toString());
assert.equal(a.dot(b), b.dot(a));

//tests on Vector norm function 



//tests on Vector Equals fundtion  


