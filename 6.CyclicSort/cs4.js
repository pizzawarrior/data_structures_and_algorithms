/*
Problem Statement #
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space.
You are, however, allowed to modify the input array.

Example 1:
Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:
Input: [2, 1, 3, 3, 5, 4]
Output: 3
*/

function findRepeat(arr) {}

console.log(findRepeat([1, 4, 4, 3, 2]));

/*Abstract:
-sort array
-loop thru
-as soon as we find a num that is not in te right spot we return it
*/
