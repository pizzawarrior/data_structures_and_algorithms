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
  // iterate thru str,
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
