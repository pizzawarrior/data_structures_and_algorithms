
## Sliding Windows

* These work efficiently on arrays/ lists by maintaining a 'window' of elements to iterate through.
* The window's size can vary depending on the problem, and slides and grows based on conditions.
* Commonly used to solve problems related to subarrays, subsequences, or intervals.
* This approach is different than 2-pointers in that they are best used for maintaining a dynamic subset of elements. Eg. Find the max sum of a subarray of fixed size (k) in the provided array. We would set the window to the desired size, then increment the window forward thru the array.
* Commonly used with hashmaps/ hashtables to keep counts of values as they fluctuate.

1. Initialization of Pointers:
Typically, two pointers are used to define the window. These pointers can represent the start and end of the window or the left and right boundaries.

2. Maintaining the Window:
As you iterate through the array or list, the window either slides to the right (by incrementing the end pointer) or expands (by incrementing the end pointer) based on the problem requirements.

3. Updating the Window:
The window's contents are updated as it slides or expands. Elements may enter or leave the window, and you need to update relevant data structures or variables accordingly.

4. Optimization:
The Sliding Window approach often leads to more optimized solutions compared to naive approaches with nested loops.
