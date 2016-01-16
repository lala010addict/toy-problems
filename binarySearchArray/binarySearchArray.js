/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]

Example:
  Sorted array: L = [1, 3, 4, 6, 8, 9, 11]
   Target value: X = 4
   Compare X to 6. X is smaller. Repeat with L = [1, 3, 4].
   Compare X to 3. X is larger. Repeat with L = [4].
   Compare X to 4. X equals 4, so the position is returned.

The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. If the target value is equal to the middle element's value, then the position is returned and the search is finished. If the target value is less than the middle element's value, then the search continues on the lower half of the array; or if the target value is greater than the middle element's value, then the search continues on the upper half of the array.

 */

var binarySearch = function (array, target) {
};

