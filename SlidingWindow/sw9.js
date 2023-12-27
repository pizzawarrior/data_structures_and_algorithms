/*
Given a string and a pattern, find all anagrams of the pattern in the given string.
Anagram is also a Permutation of a string. For example, “abc” has the following six anagrams:
abc
acb
bac
bca
cab
cba
Write a function to return a LIST of starting indices of the anagrams of the pattern in the given string.
*/

const anagrams = (str, pattern) => {
  let start = 0,
    matched = 0,
    result = [],
    charCount = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charCount)) {
      charCount[char] = 0;
    }
    charCount[char] += 1;
  }

  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (rightChar in charCount) {
      charCount[rightChar] -= 1;
      if (charCount[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charCount).length) {
      result.push(start);
    }

    if (end >= pattern.length - 1) {
      leftChar = str[start];
      start += 1;
      if (leftChar in charCount) {
        if (charCount[leftChar] === 0) {
          matched -= 1;
        }
        charCount[leftChar] += 1;
      }
    }
  }
  return result;
};

console.log(anagrams("abbcabc", "abc"));
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca" (starting at index 2), "cab" (starting at index 3), and "abc", (starting at index 4).
// Time Complexity: O(n + m) where n is the num of letters in str, and m is the num of letters in pattern
// Space Complexity: O(1) constant time

/*
Abstract: Track a window start var, a charMatched var, a charCount hashmap, and a result [].
Iterate thru pattern, count all freq's of chars

Iterate thru str next, instantiate rightChar as str[end]
If rightChar exists in hashmap,
    -> decrement hashmap value -1
        -> If hashmap[rightChar] === 0 (then we have a match,) increment match += 1

At any point if matched === total count of chars in hashmap then we have found an anagram
    -> result.push(start)

If window end >= pattern.length -1
    -> leftChar = str[start]
    -> start += 1
    if leftChar in hashmap
        -> if hashmap[leftChar] === 0
            -> matched -= 1
        hashmap[leftChar] += 1

return result
*/
