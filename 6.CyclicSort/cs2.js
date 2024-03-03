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
