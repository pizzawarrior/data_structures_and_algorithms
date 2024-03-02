/*
beloved two-sum: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

const hashmap = (nums, target) => {
  let mapObj = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (mapObj.hasOwnProperty(compliment)) {
      return [];
    }
  }
};

console.log(twoSum([41, 3, 7, 1, 19], 4));
