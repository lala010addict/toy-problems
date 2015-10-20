/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // check each string2 indexof string 1
  // if ! = -1, check pushed if exist,
  // 	if = -1 push
  var commonChar = [];
  for (var i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) !== -1) {
      if (commonChar.indexOf(string1[i]) === -1) {
        commonChar.push(string1[i])
      }
    }
  };
  return commonChar.join("");
  //return stringfy
};
