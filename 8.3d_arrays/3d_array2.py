# Return the weight of the first index from the provided 3d array
# in this example, 'weight' means value


threeDArray = [
    [
        [5, 6, 7],
        [8, 9, 10]
        ],
    [
        [0, 3, 2],
        [19, 20, 21]
    ]
]


def getFirstIndexWeight(arr):
    if type(arr) is not list or len(arr) != 2:
        return None
    return arr[0][0][0]


print(getFirstIndexWeight(threeDArray))  # Output: 5
