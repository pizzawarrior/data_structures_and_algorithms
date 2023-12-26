// Given a string, find the length of the longest substring which has no repeating characters.
const noRepeats = (str) => {
  let start = 0;
  let maxLen = 0;
  let distinctChars = {};

  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (rightChar in distinctChars) {
      // if rightChar is in current window, update start to avoid repeating chars
      // update start to max of its current value vs the index of the last occurrence of rightChar +1
      start = Math.max(start, distinctChars[rightChar] + 1);
    }
    distinctChars[rightChar] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
console.log(noRepeats("aabccbb"));
// Output = 3
// Time Complexity= O(n), where n is the num of chars in str. We iterate thru str one time.
// Space Complexity: O(k), where k is the num of distinct chars in the input str. This implies k <= n, because in the worst case str might not have any repeating chars, so the whole str would be added to the hashmap. Although, we can expect to have a fixed set of chars, (no more than 26 english letters) so we can say this runs in fixed space. Because of this we could use a fixed-size array, instead of a hashmap.

/* Approach: USE INDEXES NOT COUNTS. create a hashmap to store key (char) and value (index) of each letter as we iterate thru input string. As soon as we encounter a char that is already in the hashmap we set the new window start as the max of start (whatever the current index is) or the index of the last occurence of the char +1
Then we check current maxLen against current window len and set new max if applicable (maxLen is calculated by subtracting indexes).
Then store the current value of window end as the value for the rightChar in the hashmap.
Finally return maxLen
*/

// Logic:
// create a start index
// create a maxLen var, set to 0
// create empty hashmap
// iterate thru str, define end as iterator
// define right pointer using end as value
// if hashmap contains rightChar shrink window from beginning so we are left w/ only 1 occurrence
// else increment value at right pointer by +1
// while Object.values.length
