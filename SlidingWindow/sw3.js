// Given a string, find the length of the longest substring in it with no more than K DISTINCT characters.

const longestSubstring = (k, str) => {
  let wStart = 0;
  let maxLen = 0;
  let charCount = {};

  for (let wEnd = 0; wEnd < str.length; wEnd++) {
    const rightChar = str[wEnd];
    if (!(rightChar in charCount)) {
      charCount[rightChar] = 0;
    }
    charCount[rightChar] += 1;

    while (Object.keys(charCount).length > k) {
      const leftChar = str[wStart];
      charCount[leftChar] -= 1;
      if (charCount[leftChar] === 0) {
        delete charCount[leftChar];
      }
      wStart += 1;
    }
    maxLen = Math.max(maxLen, wEnd - wStart + 1);
  }
  return maxLen;
};

console.log(longestSubstring(3, "cbbebi"));
//Output= 5

// Time complexity: O(n). The outer for loop runs for all elements and the inner while loop processes each element only once, resulting in O(n + n), which resolves to O(n).

// Space complexity: O(k), as we will be storing a max # of k +1 chars in the hashmap

// Pseudocode:
/*
1.) First, we will insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap.
2.) These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.
3.) Then we will keep adding one character in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
4.) In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.
5.) While shrinking, we’ll decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.
6.) At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
*/
