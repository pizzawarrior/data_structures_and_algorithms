"""
Problem Statement
We are given an unsorted array containing numbers taken from the range 1 to n.
The array can have duplicates, which means some numbers will be missing.
Find all the missing numbers.

Example 1:
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:
Input: [2, 4, 1, 2]
Output: 3
"""

# iterations:
# [2, 3, 2, 1]
# [2, 3, 2, 1]


def find_missing_nums(nums):
    i = 0

    while i < len(nums):
        j = nums[i] - 1
        if nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1
    print(f"nums: {nums}")

    missing_nums = []
    for i in range(len(nums)):
        if nums[i] != i + 1:
            missing_nums.append(i + 1)
    return missing_nums


print(find_missing_nums([2, 3, 1, 8, 2, 3, 5, 1]))  # sorted = [1, 2, 3, 1, 5, 3, 2, 8]
# Output: [4, 6, 7]

"""
Abstract:
-we want to sort the array first
-then iterate through sorted array
-wherever num in the sorted array does not equal i -1 we want to return num
"""
