Cyclic sort is an in-place sorting algorithm.

A pattern that describes an interesting approach to deal with problems involving arrays containing numbers in a given range.

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
