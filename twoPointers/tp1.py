# Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
# Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


# Binary Search method:
# def pair_of_indexes(lst, target):
#     left = 0
#     right = len(lst) - 1

#     while left < right:
#         current_sum = lst[left] + lst[right]

#         if current_sum == target:
#             return [left, right]

#         if current_sum > target:
#             right -= 1

#         else:
#             left += 1

#     return [-1, -1]


# print(pair_of_indexes([1, 2, 3, 4, 6], 6))  # Output: [1, 3]
# Time Complexity: O(n) where n = the number of elements in the input array
# Space Complexity: O(1) constant space

"""
Abstract:
-designate a start point and an end pointer as indexes of the start and end of input list
-use while loop to create boundaries, with base case of when start becomes equal to end
    -create a current_sum variable that stores current value of the sum of start and end
    -if current_sum == target return start, end
    -if current_sum > target decrement end by -1
    -else increment start by +1
-else return [-1, -1]
"""


# Alternative: Use a HashTable


# def alt_pair_of_indexes(lst, target):
#     nums = {}
#     for i, num in enumerate(lst):
#         # enumerate(lst) = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 6)]
#         if target - num in nums:
#             return [nums[target - num], i]
#         else:
#             nums[lst[i]] = i
#             # nums = {1: 0, 2: 1, 3: 2, 4: 3, 6: 4}
#     return [-1, -1]


# def results():
#     print(alt_pair_of_indexes([1, 2, 3, 4, 6], 6))
#     print(alt_pair_of_indexes([2, 5, 9, 11], 47))


# results()
# Time Complexity: O(n) where n = the number of elements in the input array
# Space Complexity: O(n) where worst case we will append n numbers to the hashtable

"""
Abstract:
-create a result dict to store current index and value of value in array
-iterate thru the enumeration of array using i and num as iterators
    -if 'y' ('target - x') is in hashtable:
        -we have found pair: return y, i
    -otherwise if 'y' is not in hashtable then insert 'x' into hashtable with value as i
-if none of the above return [-1, -1]
"""
