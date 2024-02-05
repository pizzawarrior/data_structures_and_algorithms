/*
- Happy Numbers Party -
Problem Statement:
Any number will be called a Happy Number if, after repeatedly replacing it
with a number equal to the sum of the square of all of its digits, ultimately leads us to number ‘1’.
All other (UNhappy) numbers will never reach ‘1’.
Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
*/

const findHappyNum = (num) => {
  //   find loop
  let slow = num,
    fast = num;

  while (true) {
    slow = calcSquaredSum(slow); // move 1 step in the loop
    fast = calcSquaredSum(calcSquaredSum(fast)); // move 2 steps
    if (slow === fast) {
      break;
    }
  }
  return slow === 1;
};

// perform sum and square calculations
const calcSquaredSum = (num) => {
  let sum = 0;
  let digit;

  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(findHappyNum(23));
console.log(findHappyNum(12));
/*
Output:
true
false
*/

/*
Abstract:
Regardless of the outcome, the process always ends in a cycle.
If the num is a Happy Num it will be stuck on a repeating cycle of 1.
If the num is Unhappy, it will be stuck on a set of nums.
We can use fast and slow pointers similar to how we found the cycle in the last LinkedList challenges.
*/
