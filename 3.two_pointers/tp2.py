"""
Given an array of sorted numbers, remove all duplicates from it.
You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
"""


def dedupe(lst):
    if not lst:
        return 0

    i, j = 0, 1

    while j < len(lst):
        if lst[j] != lst[i]:
            i += 1
            lst[i] = lst[j]
        j += 1

    return i + 1


print(dedupe([2, 3, 3, 3, 6, 9, 9]))  # Output: 4
# Time Complexity: O(n) where n is num of elements in list
# Space Complexity: O(1) constant space
"""
Abstract:
If list is falsey return 0
Set 2 pointers, i on the left equal to 0, and and j on the right, equal to 1
***i will be pivot, separating the list into a newly sorted list on left, with duplicates to the right. j will be the iterator, and will move to the right thru the whole list. i only moves to the right when i != j***
While j is < the length of lst:
    if list at j doesn't equal list at i:
        move left pointer (i) up one
        REPLACE lst at i with lst at j: this effectively creates a new sorted list to the left of i
    move right pointer (j) up one
Return i + 1 ***because i was holding the last index of a non duplicate element, return that index +1 to get the length of non duplicate nums***
"""


# Alternative: let's have fun with recursion: THIS IS NOT A TWO-POINTER!
def dedupe_lst(lst, end=None):
    if end is None:
        end = len(lst) - 1

    if end <= 0:
        return len(lst)

    if lst[end] == lst[end - 1]:
        lst.pop()
    end -= 1

    return dedupe_lst(lst, end)


print(dedupe_lst([2, 3, 3, 4, 4, 4, 6, 9, 9]))  # Output: 5
# Time Complexity: O(n) where n is num of elements in list
# Space Complexity: O(1) constant space

"""
Abstract:
Start at end of list
If end of list == value at end of list -1:
    lst.pop()
    new end of list = current size of lst
Otherwise (if values are not the same):
    end of list -= 1
Call function recursively until we get to index 0 and the only remaining elements are unique
"""
