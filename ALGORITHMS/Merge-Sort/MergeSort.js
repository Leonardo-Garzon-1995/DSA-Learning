const testList = [10, 7, 2, 5, 1, 4, 9, 3, 6, 8]

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length /2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    let sortedList = []

    let i = 0
    let j = 0

    while ( i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedList.push(left[i])
            i += 1
        } else {
            sortedList.push(right[j])

            j += 1
        }

    }

    sortedList.push(...left.slice(i))
    sortedList.push(...right.slice(j))

    return sortedList

}



console.log("sorted List:", mergeSort(testList))