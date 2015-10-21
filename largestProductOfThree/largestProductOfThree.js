/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var sorted = array.sort(function(a, b) {
    return a - b;
  })
  var product = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]
  return product;
};
