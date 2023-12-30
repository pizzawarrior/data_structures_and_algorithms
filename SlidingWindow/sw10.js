/*
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
*/

const smallestSub = (str, pattern) => {
  let wStart = 0,
    matched = 0,
    subStart = 0,
    minLen = str.length + 1, // you'll see why in the while loop
    charCount = {};

  for (i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charCount)) {
      charCount[char] = 0;
    }
    charCount[char] += 1;
  }

  for (wEnd = 0; wEnd < str.length; wEnd++) {
    const rightChar = str[wEnd];
    if (rightChar in charCount) {
      charCount[rightChar] -= 1;
      if (charCount[rightChar] >= 0) {
        // count all matches of a char
        matched += 1;
      }
    }

    // once we have all matches, shrink window if we can, stop as soon as we remove a matched char
    while (matched === pattern.length) {
      if (minLen > wEnd - wStart + 1) {
        minLen = wEnd - wStart + 1;
        subStart = wStart;
      }

      const leftChar = str[wStart];
      wStart += 1;
      if (leftChar in charCount) {
        if (charCount[leftChar] === 0) {
          matched -= 1;
        }
        charCount[leftChar] += 1;
      }
    }
  }

  if (minLen > str.length) {
    return "";
  }
  return str.substring(subStart, subStart + minLen);
};

console.log(smallestSub("aabdec", "abc")); //Output: abdec
console.log(smallestSub("abdabca", "abc")); //Output: abc
console.log(smallestSub("adcad", "abc")); //Output: ''

// Time Complexity: O(n + m) where n is the num of chars in str, and m is the num of chars in pattern.
// Space Complexity: O(m), where worst case the whole pattern being stored in the hashmap can have distinct chars. In the worst case we would also need O(n) space for the substring, which will happen when the input str is a permutation of the pattern.

/* Abstract:
Create a minLen var, a start var, a matched count var, and charCount hashmap.
Iterate thru pattern first, count all occurrences of chars.
Iterate thru str next, decrementing char count for each match.
Whenever we have matched all chars we try shrinking the window from the start, keeping track of the smallest substring that has all matching chars.
Stop the shrinking process as soon as we remove a matched char from window. Note: we may have redundant chars in sliding window, when we only need 1. In this case we will shrink the window without decrementing matched count. We only decrement matched count when the second occurrence goes out the window.
If total match, return str that has all chars, else return empty str.
*/
