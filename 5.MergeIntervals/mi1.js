/*
Problem Statement:
Given a list of intervals, merge all the overlapping intervals to
produce a list that has only mutually exclusive intervals.

Example 1:
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
one [1,5], and we keep the interval of [7,9] as is becasue it does not overlap with anything.

Example 2:
Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  // handle how it prints the result:
  printInterval() {
    process.stdout.write(`[${this.start},${this.end}]`);
  }
}

const merge = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort intervals by start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};

process.stdout.write("Merged intervals 1: ");
let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
for (let i = 0; i < result.length; i++) {
  result[i].printInterval();
}
console.log();

process.stdout.write("Merged intervals 2: ");
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (let i = 0; i < result.length; i++) {
  result[i].printInterval();
}
console.log();

process.stdout.write("Merged intervals 3: ");
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (let i = 0; i < result.length; i++) {
  result[i].printInterval();
}
console.log();

/*
Time Complexity:O(N * logN) where N is the total num of intervals. We iterate thru the intervals only once
which takes O(N) but because we sort in the beginning it produces O(N * logN)
Space Complexity: O(N) as we need to return a ist containing all merged intervals. We also need O(N) space for sorting.
*/

/*
Abstract:
- Goal is to merge intervals whenever they overlap.
- Take 2 intervals, a and b. Sort the intervals by where they start to ensure a.start <= b.start
- If a overlaps b (b.start <= a.end), we need to merge them into a new interval 'c' such that:
-> c.start = a.start
-> c.end = max(a.end, b.end)
- repeat these above 2 steps to merge c with the next interval if it overlaps with c.
*/

/*
Bonus points: what's with the combination above of process.stdout.write and console.log()?
*/
