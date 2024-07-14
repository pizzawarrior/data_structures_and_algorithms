// Return the weight of the first index from the provided 3d array
// in this example, 'weight' means value

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

function getWeightOfFirstIndex(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return null;
  }
  return arr[0][0][0];
}

console.log(getWeightOfFirstIndex(threeDArray)); // Output: 15
