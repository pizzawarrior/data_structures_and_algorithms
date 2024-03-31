# Return the weight of the first index from the provided 3d array
# in this example, 'weight' means value


def getFirstIndexWeight(threeDArray):
    if type(threeDArray) != list or len(threeDArray) != 2:
        return None
    return threeDArray[0][0][0]


threeDArray = [[[5, 6, 7], [8, 9, 10]], [[0, 3, 2], [19, 20, 21]]]

print(getFirstIndexWeight(threeDArray))
