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

Time Complexity: O(logN)
This one is tough to calculate. However, we know that all unhappy numbers get stuck in a cycle.
This sequence behavior tells us two things:
1. If the number N is <= 1000, then we reach the cycle, or '1' in at most 1001 steps.
2. For N > 1000 suppose the number has M digits, and the next number is N1.
From the wikipedia link on sequence behavior we know the sum of the squares
of the digits of 'N' is at most 9^2 M, or 81M, (this will happen when all digits of N are 9)

This means:
1. N1 < 81M
2. We know M = log(N + 1)
3. Therefore: N1 < 81 * log(N + 1) => N1 = O(logN)

Space Complexity:
Constant space O(1)
*/

/*
Abstract:
Regardless of the outcome, the process always ends in a cycle.
If the num is a Happy Num it will be stuck on a repeating cycle of 1.
If the num is Unhappy, it will be stuck on a set of nums.
We can use fast and slow pointers similar to how we found the cycle in the last LinkedList challenges.
*/
