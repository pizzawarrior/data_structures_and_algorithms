/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
*/

const longestSub = (str, k) => {
  let start = 0;
  let maxLen = 0;
  let maxRepeat = 0;
  let charCount = {};

  for (let end = 0; end < str.length; end++) {
    let rightChar = str[end];
    if (!(rightChar in charCount)) {
      charCount[rightChar] = 0;
    }
    charCount[rightChar] += 1;
    maxRepeat = Math.max(maxRepeat, charCount[rightChar]);

    if (end - start + 1 - maxRepeat > k) {
      leftChar = str[start];
      charCount[leftChar] -= 1;
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
console.log(longestSub("abccde", 1));
//Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
// Time Complexity: O(n)- Iterate thru array 1 time; n = num of chars in string
// Space Complexity: O(1)- Technically it would be O(26) worst case, having to store values for each letter of alphabet in hashmap, which resolves to O(1).

// Abstract: track start, end, and maxLen of str. iterate thru str, find longest substring of repeating letters using hashmap. curr window size is from start to end-- we find a letter that repeats maxRepeat times and the remaining letters we should replace. if remaining letters are > k, shrink window from start. return maxLen.
