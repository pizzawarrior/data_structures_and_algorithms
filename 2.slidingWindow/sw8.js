/* Given a string and a pattern, find out if the string contains any permutation of the pattern.
Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n! permutations.
*/

const permutation = (str, pattern) => {
  let start = 0;
  let matched = 0;
  let charCount = {};

  // iterate thru pattern first, count all char frequencies
  for (let i = 0; i < pattern.length; i++) {
    let chr = pattern[i];
    if (!(chr in charCount)) {
      charCount[chr] = 0;
    }
    charCount[chr] += 1;
  }
  // iterate thru str, documenting the current char at the (right) end of the window
  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (rightChar in charCount) {
      charCount[rightChar] -= 1;
    }
    if (charCount[rightChar] === 0) {
      matched += 1;
    }
  }
  if (matched === Object.keys(charCount).length) {
    return true;
  }
  if (end >= pattern.length - 1) {
    start += 1;
    leftChar = str(start);
    if (leftChar in charCount) {
      if (charCount[leftChar] === 0) {
        matched -= 1;
      }
      charCount[leftChar] += 1;
    }
  }
  return false;
};
console.log(permutation("oidbcaf", "abc"));
// Output: true
// Time Complexity: O(n + m) where n and m are the num of chars in the input str and pattern
// Space Complexity: O(m) where worst case the whole pattern can have distinct chars that would be stored in the hashmap

/*
Abstract:
Track window start, count of matched chars, and charCount hashmap.
Iterate thru pattern, counting frequencies of all letters.
Iterate thru str next, and document the char at right end of window
If current rightChar exists in hashmap, decrement its count in hashmap
If hashmap[rightChar] === 0, this indicates full match for that char, increment matched count +1
At any point if the length of matched === num of chars in hashmap, return true; we have our req'd permutation
If current window > length of pattern shrink window by incrementing window start +1, set new leftChar to current window start
If current leftChar is in hashmap:
    -> if hashmap[leftChar] === 0 (if there was a match here before),
        -> decrement matched -1. (there is no longer a match at this char, the window shifted)
-> increment count of leftChar in hashmap += 1
And finally, if there is not a total match, return false

*/
