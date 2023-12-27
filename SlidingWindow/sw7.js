/*
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
*/

const longestOnes = (arr, k) => {
  let start = 0,
    maxOnesCount = 0,
    maxLen = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 1) {
      maxOnesCount += 1;
    }
    if (end - start + 1 - maxOnesCount > k) {
      if (arr[start] === 1) {
        maxOnesCount -= 1;
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
console.log(longestOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
// Output: 6
// Time Complexity: O(n), where n is the num of nums in arr
// Space Complexity: O(1), constant space.

// Abstract: iterate thru arr, recording a window start, window end, maxOnes, and maxLength. In any current window we should have the maxOnes, and should try to replace the remaining 0s with k amount of ones. If we have more than k remaining 0s we will have to shrink the window from the left (start), as we can't replace more than k 0s.
