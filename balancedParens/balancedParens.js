/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
    var ch,
        pairs = {
            '{': '}',
            '(': ')',
            '[': ']'
        }
    queue = [];

    for (var i = 0; i < str.length; i++) {
        ch = str[i];

        for (var key in pairs) {
            if (ch === key) {
                queue.push(key);
            }
            if (ch === pairs[key]) {
                if (ch !== pairs[queue.pop()]) {
                    return false;
                }
            }
        }
    }

    return queue.length === 0;

};


//compare right and left && notBalanced
