//2Sum
//Return the index of the 2 nums that add together to equal 'target'

const twoSum = (arr, target) => {
  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (numMap[difference] !== undefined) {
      return [numMap[difference], i];
    } else {
      numMap[arr[i]] = i;
    }
  }
};
console.log(twoSum([0, 17, 3, 19, 41, 12, 4, 1], 29));
// Output: [1, 5]
