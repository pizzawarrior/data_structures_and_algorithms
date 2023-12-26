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
  }
};
console.log(longestSub("abccde", 1));
//Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

// Abstract: track start, end, and maxLen of str. iterate thru, find longest substring of repeating letters using hashmap. will need to do some magic to keep track of indexes and adding and subtracting k to current index. return maxLen + k
//Example: start with counting char at index 0. if char at index 0 +1 === previous char, OR char at curr index +1 +k === curr char, then maxLen = Math.max(maxLen,...). otherwise increment start by +1, decrement rightChar by -1, and repeat.
