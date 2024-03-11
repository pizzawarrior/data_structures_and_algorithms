/*
Problem Statement #
We are given an unsorted array containing ‘n + 1’ numbers taken from the range 1 to ‘n’.
The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space.
You are, however, allowed to modify the input array.

Example 1:
Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:
Input: [2, 1, 3, 3, 5, 4]
Output: 3
*/

function findRepeat(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      let j = arr[i] - 1;
      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        return arr[i];
      }
    } else {
      i += 1;
    }
  }
  return -1;
}

console.log(findRepeat([2, 1, 3, 3, 5, 4])); // Output: 3

/*Abstract:
-sort array
-loop thru
-as soon as we find a num that is not in te right spot we return it
Note: We try to place each number on its correct index. Since there is only one duplicate, if while swapping the number with its index both the numbers being swapped are same, we have found our duplicate
*/
