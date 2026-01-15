list_a = [1, 2, 3]
print("Initial array: ", list_a)

list_a.append(4)
print("Updated array: ", list_a)    

list_a.pop()
print("Updated array: ", list_a)

list_a.insert(2, 5)
print("Updated array: ", list_a)

list_a[0] = 7
print("Updated array: ", list_a)

print("Element at index 2: ", list_a[2])

print("Array contains 7: ", 7 in list_a) 