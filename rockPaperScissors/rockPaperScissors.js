/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function() {
  var inputs = ["rock", "paper", "scissors"];
  var output = [];

  for (var i = 0; i < inputs.length; i++) {
    for (var j = 0; j < inputs.length; j++) {
      for (var k = 0; k < inputs.length; k++) {
        output.push([inputs[i], inputs[j], inputs[k]]);
      }
    }
  }


  return output;

};

