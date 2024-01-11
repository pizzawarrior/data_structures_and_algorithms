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
"""
Abstract:
If list is falsey return 0
Set 2 pointers, i and j equal to 0, 1
While j is < the length of lst:
    if list at j doesn't equal list at i:
        move left pointer (i) up one
        REPLACE lst at i with lst at j: this effectively creates a new sorted list to the left of i
    move right pointer (j) up one
    (Note: j iterates all the way thru the list, while i only moves up when there is not a match. At the end of the above input the function exits with lst arranged like so: [2, 3, 6, 9, 6, 9, 9]), with i having only made it to index 3. This is why we return i + 1)
Return i + 1
"""


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
