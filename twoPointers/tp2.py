"""
Given an array of sorted numbers, remove all duplicates from it.
You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
"""


def dedupe(lst):
    pass


print(dedupe([2, 3, 3, 3, 6, 9, 9]))  # Output: 4


# Alternative: let's have fun with recursion: THIS IS NOT A TWO-POINTER!
# def dedupe_lst(lst, end=None):
#     if end is None:
#         end = len(lst) - 1

#     if end <= 0:
#         return len(lst)

#     if lst[end] == lst[end - 1]:
#         lst.pop()
#     end -= 1

#     return dedupe(lst, end)


# print(dedupe_lst([2, 3, 3, 3, 6, 9, 9]))  # Output: 4


"""
Abstract:
Start at end of list
If end of list == value at end of list -1:
    lst.pop()
    new end of list = current size of lst
Otherwise (if values are not the same):
    end of list -= 1
Call function recursively until we get to index 0
"""
