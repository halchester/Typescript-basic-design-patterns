def bubbleSort(collection):
    for i in range(len(collection) - 1):
        for j in range(len(collection) - i - 1):
            if collection[j] > collection[j+1]:
                collection[j], collection[j+1] = collection[j+1], collection[j]


Array = [0, -1, 3, 1, 6, 9, 4]
bubbleSort(Array)
print(Array)
