// Return the weight of the first index from the provided 3d array

function getWeightOfFirstIndex(threeDArray) {
  if (!Array.isArray(threeDArray) || threeDArray.length !== 2) {
    return null;
  }
  return threeDArray[0][0][0];
}

const threeDArray = [
  [
    [15, 27, -1],
    [762, 99, 420],
  ],
  [
    [37, 0, 7],
    [88, 5409, 444],
  ],
];

console.log(getWeightOfFirstIndex(threeDArray)); // Output: 15
