/* Given an array of positive numbers and a positive number ‘k’,
find the maximum sum of any contiguous subarray of size ‘k’.
*/

const maxSubarray = (k, arr) => {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // slide window while keeping it the required size
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      //subtract element from count
      windowSum -= arr[windowStart];
      // slide window forward 1
      windowStart++;
    }
  }
  return maxSum;
};
console.log(maxSubarray(3, [2, 1, 5, 1, 3, 2])); // Output: 9

//Time complexity is O(N); we only iterate thru array 1 time
//Space complexity is O(1), constant space

/*
Abstract:
Start with amaxSum var, a window start var, and a current window sum var.
Iterate thru array, adding up all values in arr
If the index at the end of the current window is >= to the provided k restriction count the points and determine if this is a new maxSum.
Shrink the window from the beginning of the window, and subtract the corresponding score from windowSum
Return maxSum
*/
