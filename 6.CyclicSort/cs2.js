/*
Problem Statement:
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:
Input: [4, 0, 3, 1]
Output: 2

Example 2:
Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
*/

function findMissingNum(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    // 4, 0, 3, 1
    let j = nums[i]; // 4
    if (nums[i] < n && nums[i] !== nums[j]) {
      //
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1; //
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}
console.log(findMissingNum([4, 0, 3, 1])); // Output: 2
console.log(findMissingNum([8, 3, 5, 2, 4, 6, 0, 1])); // Output: 7
/*Time Complexity: O(n) -> In the while loop, although we are not incrementing the index i when
swapping the numbers, this will result in more than ‘n’ iterations of the loop,
but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and
once a number is at its correct index, we will move on to the next number by incrementing i.
Space Complexity: Constant space O(1)
*/

/*
Abstract:
-sort array first by swapping
-then loop through sorted array, and when we find a number that does not equal the index we return that index
*/
