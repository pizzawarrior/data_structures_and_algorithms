// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum
// is greater than or equal to ‘S’. Return 0, if no such subarray exists.

const smallestSubarrayWithGivenSum = (s, arr) => {
  let wSum = 0;
  let wStart = 0;
  let minLen = arr.length;

  // iterate thru arr, set end at arr.length -1
  for (let wEnd = 0; wEnd < arr.length; wEnd++) {
    //add nums as we traverse
    wSum += arr[wEnd];
    // whenever the sum is >= s, set new minLen to smallest subarray
    while (wSum >= s) {
      minLen = Math.min(minLen, wEnd - wStart + 1);
      //adjust window as small as ppossible until wSum is less than s
      wStart += 1;
      wSum -= arr[wStart];
    }
  }
  return minLen === arr.length ? 0 : minLen;
};
console.log(smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]));

/*
1.) First, we will add-up elements from the beginning of the array until their sum becomes greater than or equal to ‘S’.
2.) These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to ‘S’. We will remember the length of this window as the smallest window so far.
3.) After this, we will keep adding one element in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
4.) In each step, we will also try to shrink the window from the beginning. We will shrink the window until the window’s sum is smaller than ‘S’ again. This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step we will do two things:
-> Check if the current window length is the smallest so far, and if so, remember its length.
-> Subtract the first element of the window from the running sum to shrink the sliding window.
*/
