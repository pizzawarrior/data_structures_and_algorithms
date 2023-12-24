let map1 = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);
console.log("Map1: ");
console.log(map1);
console.log(map1.get(2)); // 20
console.log(map1.has(4)); // true
console.log(map1.has(5)); // false
