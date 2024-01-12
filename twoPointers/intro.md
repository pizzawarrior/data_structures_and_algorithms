
## Two Pointers

* Generally work with arrays or linked lists
* The two pointers can move towards each other, away from each other, or at different speeds.
* A common approach with them is setting one pointer as a pivot inside the array, while the other pointer is used in a loop as an iterator and moves away from the pivot.
* This can lead to solutions with better time complexity, often O(N) instead of O(N^2) for certain problems.
* The key idea behind the Two Pointers pattern is that by using two pointers, you can iterate through the data more efficiently than with a single pointer.
* These are different from the Sliding Window, as they are best used for identifying pairs or triplets in a list.

**Example** Removing duplicates from a list in place (without using extra storage). The pivot pointer starts at the beginning o th list and only moves to the right only when a unique number is found, resorting the list in the process (using the other pointer), and the result is the list to the left of the pivot will contain only unique values.

* Two Pointers Moving Towards Each Other:
In this variation, two pointers start from opposite ends and move towards each other until they meet in the middle.
This is useful when the array or list is sorted, and you need to find a pair, a triplet, or some other pattern.

* Two Pointers Moving Away from Each Other:
In this variation, two pointers start at the same end and move away from each other until they reach opposite ends.
This is often used to find a subarray, subsequence, or window that meets certain conditions.

* Fast and Slow Pointers:
This variation involves using two pointers, one moving faster than the other.
It is particularly useful for detecting cycles or finding the middle of a linked list.
