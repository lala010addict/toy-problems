/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 var splits = string.split(' ');
 var nonrepeated = [];
 splits.forEach(function(item){
 	if(splits.indexOf(item ) === -1){
 		nonrepeated.push(item)
 	}
 })
 return nonrepeated[0]
};
