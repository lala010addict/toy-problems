/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
 */

//Array.prototype.isSubsetOf = function(array) 
var isSubsetOf = function(Arr, array) {
  var test = false
  return array.reduce(function(item) {
    for (var i = 0; i < Arr.length; i++) {
      if (array.indexOf(Arr[i]) !== -1) {
        test = true
      } else {
        test = false
      }
    }
    return test
  }, false)
  
};

var Arr = ['merge', 'reset', 'reset', 'a']

var array = ['reset', 'merge', 'add', 'commit']
console.log(isSubsetOf(Arr, array))
