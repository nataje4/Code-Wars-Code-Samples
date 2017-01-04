/* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack  will be integers larger than 0. You can mutate the Fighter objects.

link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
*/

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}



function fight(fighterA, fighterB) {
  
  /* maybe name your variables better here, so that it's clear that fighterA is 
  the first attacker
  */
  
  var healthA = fighterA.health;
  var healthB = fighterB.health;
  while (healthA > 0 && healthB > 0) {
    healthB -= fighterA.damagePerAttack; 
    if (healthB <= 0) {
      return fighterA; 
    }
    healthA -= fighterB.damagePerAttack; 
    if (healthA <= 0) {
      return fighterB; 
    }
  }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  
// Maybe add something here to check that all parameters are instances of Fighter
  
  
  var goesFirst;
  var goesSecond; 
  
  if (fighter1 == firstAttacker) {
    goesFirst = fighter1;
    goesSecond = fighter2; 
  } else {
    goesFirst = fighter2;
    goesSecond = fighter1; 
  }
  
  var winner = fight(goesFirst, goesSecond);

  return winner.name;
}


/* declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), is Harry, should be Lew


*/