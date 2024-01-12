/* Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
*/

const wordConcat = (str, words) => {
  let result = [],
    wordFreq = {},
    countWords = words.length,
    wordLen = words[0].length;

  if (words.length === 0 || words[0].length === 0) {
    return [];
  }
  // count words in word frequency hashmap
  words.forEach((word) => {
    if (!(word in wordFreq)) {
      wordFreq[word] = 0;
    }
    wordFreq[word]++;
  });

  //   get the target length of combined words we need to match, in this case 6.
  for (i = 0; i < str.length - countWords * wordLen + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < countWords; j++) {
      nextIndex = i + j * wordLen;
      let word = str.substring(nextIndex, nextIndex + wordLen);
      if (!(word in wordFreq)) {
        break;
      }

      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      if (wordsSeen[word] > wordFreq[word] || 0) {
        break;
      }

      if (j + 1 === countWords) {
        result.push(i);
      }
    }
  }
  return result;
};
console.log(wordConcat("catcatfoxfox", ["cat", "fox"])); // Output: [3]
console.log(wordConcat("catfoxcatfox", ["cat", "fox"])); // Output: [0, 3, 6]

// Time Complexity: O(n * m * length) where n is num of chars in str, m is num of words in words array, and length is the length of a word.
// Space Complexity: O(m + n), worst case we store all words in 2 hashmaps, where m is the num of words. We would also need O(n) space for the result array, where n is each index stored in the result array.

/* Abstract:
Iterate thru words array and count the frequency in a hashmap
Start from every index in str and try to match all words
In each iteration keep track of words we have already seen in another hashmap
If a word is not found, or has a higher frequency than required, move to next char in str
Add index to result array only if we have found all required words
Return result array

*/
