"""
Given a sorted list, create a new list containing squares of all the numbers of the input list in the sorted order.
"""


def make_squares(lst):
    if not lst:
        return []

    n = len(lst)
    squared = [0] * n

    i, j, k = 0, n - 1, n - 1

    while i < j:
        left_square = lst[i] * lst[i]
        right_square = lst[j] * lst[j]

        if left_square >= right_square:
            squared[k] = left_square
            i += 1
        else:
            squared[k] = right_square
            j -= 1
        k -= 1

    return squared


print(make_squares([-2, -1, 0, 2, 3]))  # Output: [0, 1, 4, 4, 9]
# Time Complexity: O(n) linear time, as n is the length of the input list. The while loop iterates thru the list only once and performs a constnt amount of work
# Space Complexity: O(n) linear space complexity, where n is length of input list

"""
Abstract:
-initialize n as length of input list
-initialize a list called 'squared' made up of 0's and which is the length of the input list to allocate memory and allow us to use indeces k and j interchangeably. The 0's are only placeholders.
-initialize i = 0, j = n -1 for iterating thru input list, k = n-1 for updating squared
-while i is < j:
    -left_square = lst[i] ** 2
    -right_square = lst[j] **2
    -if left_square > right_square:
        -squared[k] = left_square
        -i += 1
    -else: squared[k] = right_square
    -j -= 1
return squared
"""


# Alternate solution that would work just to pass a test:
def sort_lst(lst):
    # make copy of lst and square all nums
    new_lst_squared = [num * num for num in lst[:]]
    # now sort it in ascending order!
    for i in range(len(new_lst_squared)):
        for j in range(i + 1, len(new_lst_squared)):
            if new_lst_squared[i] >= new_lst_squared[j]:
                new_lst_squared[i], new_lst_squared[j] = (
                    new_lst_squared[j],
                    new_lst_squared[i],
                )

    return new_lst_squared


print(sort_lst([6, 3, 4, 2, 5, 9]))
# Note, this is a reasonable solution for passing a simple test, however it is not very performant at O(n^2) due to the nesting of the loops
