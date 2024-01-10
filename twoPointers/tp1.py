# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


def pair_of_indexes(arr, target):
    start_pointer = arr[0]
    end_pointer = arr[arr.length - 1]

    if start_pointer + end_pointer == target:
        return


print(pair_of_indexes([1, 2, 3, 4, 6], 6))  # Output: [1, 3]
