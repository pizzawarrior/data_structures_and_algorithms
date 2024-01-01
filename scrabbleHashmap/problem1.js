import { letterVals, FreqMap } from "./constants.js";

/*
Given a word and a set of tiles that can be used to make the word, determine the point value possible for the word. The blank tile (underscore in this case) can stand in for any letter, but has no point value.
*/
const validWordPoints = (word, tiles) => {
  let score = 0;
  let charCount = new FreqMap(tiles);

  for (let letter of word) {
    if (letter in charCount && charCount[letter] > 0) {
      charCount[letter]--;
      score += letterVals[letter];
    } else if ("_" in charCount && charCount["_"] > 0) {
      charCount["_"]--;
    } else {
      return 0;
    }
  }
  return score;
};

console.log(validWordPoints("cat", "tmoa_")); // Output: 2
console.log(validWordPoints("cat", "tmoca")); // Output: 5
console.log(validWordPoints("cat", "exit")); // Output: 0
console.log(validWordPoints("cat", "_t_ezr")); // Output: 1

/*
  Abstract:
  Make freq map of tiles and a score var
  If letter from tiles is in word, deduct letter count from freq map, add value to score.
    otherwise if there are underscores in freq map subtract -1 underscore from hashmap, and move on
     else if no underscores remaining return 0
  return score
  */
