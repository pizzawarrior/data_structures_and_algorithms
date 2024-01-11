"""
Given an unsorted array of numbers and a target key, remove all instances of key in-place and return the new length of the array.
"""


def clean_length(lst, key):
    sorted_index = 0
    for i in range(len(lst)):
        if lst[i] != key:
            lst[sorted_index] = lst[i]
            sorted_index += 1
    return sorted_index


print(clean_length([3, 2, 3, 6, 3, 10, 9, 3], 3))  # Output: 4
"""
Abstract:
Set left pointer 'sorted_index' to 0
Iterate thru range of lst length with i as iterator
    If list at i != key
        lst at sorted_index = lst[i]
        sorted_index += 1
return sorted_index

Notes: sorted_index is the pivot; everything to the left of it is sorted. sorted_index only moves to the right when i finds a number to keep (a number that does not match key). When i finds a num to keep it sends it to the current index of sorted_index. This is why we return soreted_index.
"""
