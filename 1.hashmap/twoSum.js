/*
Beloved two-sum: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

const twoSum = (nums, target) => {
  let mapObj = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (mapObj.hasOwnProperty(compliment)) {
      return [mapObj[compliment], i];
    }
    mapObj[nums[i]] = i;
  }
};

console.log(twoSum([41, 3, 7, 1, 19], 4));
//Output: [1, 3]
// Time Complexity: O(n) where n is the length of nums
// Space Complexity: O(n) constant space where n would be the num of numbers stored in the hashmap

/*
Abstract:
-create hashmap object to store compliment values and their index
-iterate through array
-define compliment as target - current num
-if hashmap contains compliment, return the value of the compliment from the hashmap
-otherwise add current value to hashmap with value as index
*/
