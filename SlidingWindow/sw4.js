/*
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put the maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both the baskets.
(This is virtually the same as the previous problem-- find the length of the longest substring with no more than 2 unique values)
*/

const fruitBaskets = (arr) => {
  let start = 0;
  let maxLen = 0;
  let fruitCount = {};

  for (let end = 0; end <= arr.length; end++) {
    const rightFruit = arr[end];
    if (!(rightFruit in fruitCount)) {
      fruitCount[rightFruit] = 0;
    }
    fruitCount[rightFruit] += 1;

    while (Object.keys(fruitCount).length > 2) {
      const leftFruit = arr[start];
      fruitCount[leftFruit] -= 1;
      if (fruitCount[leftFruit] === 0) {
        delete fruitCount[leftFruit];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
console.log(fruitBaskets(["A", "B", "C", "A", "A", "C"]));
// Output: 3 -> ['C', 'A', 'C']
// Time Complexity: O(n) where n is num of chars in input array
// -> the outer loop runs for all chars, and the inner loop processes each char only once, resulting in O(n + n), which resolves to O(n)
// Space Complexity: constant space, O(1), as there can only be a max of 3 different chars that can be stored in the hashmap

// logic:
// iterate thru arr
// add right 'fruit' to hashmap with value of 0
// if fruit in hashmap
// increment fruitCount[rightFruit] by +1
// while fruitCount.keys.length > 2:
// designate leftFruit as start
// decriment fruitCount[leftFruit] -1
// if fruitCount[leftChar] is equal to 0
// delete fruitCount[leftChar] from fruitCount
// increment start +1
// declare maxLen = Math.max(maxLen, end - start +1)
// return maxLen
