/*
Beloved two-sum: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

// const twoSum = (nums, target) => {
//   let mapObj = {};

//   for (let i = 0; i < nums.length; i++) {
//     let compliment = target - nums[i];
//     if (mapObj[compliment] !== undefined) {
//       return [mapObj[compliment], i];
//     } else {
//       mapObj[nums[i]] = i;
//     }
//   }
// };

// console.log(twoSum([41, 3, 7, 1, 19], 4));
//Output: [1, 3]
// Time Complexity: O(n) where n is the length of nums
// Space Complexity: O(1) constant space where n would be the num of numbers stored in the hashmap

/*
Abstract:
-create hashmap object to store compliment values and their index
-iterate through array
-define compliment as target - current num
-if hashmap contains compliment, return the value of the compliment from the hashmap
-otherwise add current value to hashmap with value as index
*/

const twoSum2 = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap.hasOwnProperty(nums[i])) {
      return [hashMap[nums[i]], i];
    }
    hashMap[diff] = i;
  }
};
console.log(twoSum2([41, 3, 7, 1, 19], 4));
