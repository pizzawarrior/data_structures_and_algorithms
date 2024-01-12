# Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

"""
Example:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
"""


def make_triplets(lst):
    lst.sort()
    triplets = []
    for i in range(len(lst)):
        if i > 0 and lst[i] == lst[i - 1]:
            continue
        search_pair(
            lst, -lst[i], i + 1, triplets
        )  # Note how -lst[i] is being fed to the next function as 'target_sum'

    return triplets


def search_pair(lst, target_sum, left, triplets):
    right = len(lst) - 1
    while left < right:
        current_sum = lst[left] + lst[right]
        if current_sum == target_sum:  # found triplet, move both pointers
            triplets.append([-target_sum, lst[left], lst[right]])
            left += 1
            right -= 1
            while left < right and lst[left] == lst[left - 1]:
                left += 1  # skip same element to avoid duplicates
            while left < right and lst[right] == lst[right + 1]:
                right -= 1
        elif target_sum > current_sum:
            left += 1  # because the list is sorted, we move pointer up towards nums higher in value
        else:
            right -= 1  # we need a pair with a smaller sum


print(make_triplets([-3, 0, 1, 2, -1, 1, -2]))


"""
Abstract:
The first part of the fn will sort the input list. Second part will search the list for triplets.
First: sort the list to make it easier for encountering duplicates, as we can only return unique triplets.
Instantiate empty list to append triplets to.
Loop thru sorted list, any time arr[i] is equal to the previous num CONTINUE.
We will also be setting -arr[i] as the 'target' sum in the searching fn. See note at bottom.
Write fn to skip duplicates, then use recursion to call the proceding 'searching function'.
Search fn:
Use 2 pointers, left and right. The sum of them will be used to compare against a 'target_sum'. If true, they will be appended to triplets. Left will increment right, and right will increment left.
Note: during our iteration we are at X (which is arr[i]), so we need to find Y and Z such that X + Y + Z == 0. This equates to Y + Z == -X. Thi is why we have -arr[i] designated as target_sum.
"""
