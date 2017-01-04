/*Two Joggers

Description

Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

Illustration

Example where Charles (dashed line) runs a shorter lap than Bob:

Example laps

Task

Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)
The function should return an array containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run
Examples

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2] */

//link: https://www.codewars.com/kata/two-joggers/train/javascript

var nbrOfLaps = function (bobLength, charlesLength) {
  
	//throw error if inputs are invalid 
	
	var longerLap 
	var shorterLap 

	
	if (bobLength === charlesLength) { 
		return [1,1]
	} else if (bobLength < charlesLength) {
		longerLap = charlesLength
		shorterLap = bobLength
	} else {
		longerLap = bobLength
		shorterLap = charlesLength
	}
	
	var counter = 1 

	while ((counter*longerLap)%shorterLap !== 0) {
		counter++
	}

	var lcm = counter*longerLap; 

	return [(lcm/bobLength),(lcm/charlesLength)]

}