def merge_sort(array):
    if len(array) <= 0:
        return 
    
    middle_point = len(array) // 2
    left_part = array[:middle_point]
    rightpart = array[middle_point:]

letters = [1, 2, 3, 4]

middle_point = len(letters) // 2
print("left:", letters[:middle_point])
print("right: ",letters[middle_point:])