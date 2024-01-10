# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


def pair_of_indexes(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return [left, right]

        if current_sum > target:
            right -= 1

        else:
            left += 1

    return [-1, -1]


print(pair_of_indexes([1, 2, 3, 4, 6], 6))  # Output: [1, 3]
