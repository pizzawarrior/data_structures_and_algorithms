# Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

"""
Example:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
"""


def make_triplets(lst):
    pass


print(make_triplets([-3, 0, 1, 2, -1, 1, -2]))


"""
Abstract:
Use 2 pointers, left and right. Left holds the value of the first potential num in output triplet, right looks for pairs that = left
"""
