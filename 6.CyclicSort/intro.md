Cyclic sort is an in-place sorting algorithm.

It relies on an array of keys having the same value (or very close) of their index.
Eg: [4, 2, 1, 3, 0]
Sorted: [0, 1, 2, 3, 4]
Sorted (with index for ref): [0: 0, 1: 1, 2: 2, 3: 3, 4: 4]

Start by assigning i to value 0, and j to value of the index of i.
If arr[i] !== arr[j]
Sort the nums in place until sorted


Catch and Release:
Catch:
Start with the first element and "catch" it.
Check if it's in its correct position.
If not, swap it with the element at its correct position.

Release:
"Release" the element to its correct position.
Move to the next element and repeat the process.
Repeat:

Keep catching and releasing elements until the entire array is sorted.

Example Problem:
-> You are given an UNSORTED array containing numbers taken from the range 1 to ‘n’
-> The array can have duplicates, which means that some numbers will be missing
-> Find all the missing numbers

To efficiently solve this problem, we can use the fact that the input array contains numbers in the range of 1 to ‘n’. For example, to efficiently sort the array, we can try placing each number in its correct place, i.e., placing ‘1’ at index ‘0’, placing ‘2’ at index ‘1’, and so on. Once we are done with the sorting, we can iterate thru the array to find all indices that are missing the correct numbers.
These will be our required numbers.
