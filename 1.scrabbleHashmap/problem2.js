import { letterVals, FreqMap } from "./constants.js";

// Problem 2:
// Given a list of valid words and a set of tiles, return the highest score that can be achieved, along with the corresponding word.
const highestVal = (words, tiles) => {
  let maxPoints = 0,
    charCount = new FreqMap(tiles),
    maxWord = "";

  for (let word of words) {
    // bring in the same charCount for each word in words using spread syntax
    let tempCharCount = { ...charCount };
    let currentPoints = 0;
    for (let letter of word) {
      if (tempCharCount[letter] > 0) {
        currentPoints += letterVals[letter];
        tempCharCount[letter]--;
      } else if (tempCharCount["_"] > 0) {
        tempCharCount["_"]--;
      } else {
        currentPoints = 0;
        break;
      }
    }
    if (currentPoints > maxPoints) {
      maxPoints = currentPoints;
      maxWord = word;
    }
  }
  return [maxPoints, maxWord];
};
console.log(highestVal(["twist", "him", "zit", "slug"], "ztswt_")); // Output: 11, 'zit'
/*
Time Complexity: O(n * m * length) where n is the num of words, m is the str of tiles, and length is the length of str.
Space Complexity: O(m + n) where worst case we store all words in 2 hashmaps, and m is num of of words. O(n) space would be for storing maxPoints.
*/

/* Abstract:
    Begin with a maxPoints var, wordIndex var, currentPoints var, and a charCount hashmap
    Iterate thru tiles and store occurrences of each char
    Iterate thru word in words, checking if we can make each word from the tiles and summing up points
    maxPoints = Math.max(maxPoints, currentPoints)
    Return maxPoints
    Then figure out how to return the corresponding word

    */
