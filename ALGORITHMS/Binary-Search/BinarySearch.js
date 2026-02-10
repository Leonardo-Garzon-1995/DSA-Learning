// The list must be sorted in ascending order
const list = [2, 4, 6, 8, 10, 12, 14]

function BinarySearch(arr, target) {
    let low = 0
    let high = arr.length -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            low = mid + 1 
        } else {
            high = mid -1
        }
    }

    return -1
}
console.log(BinarySearch(list, 10))