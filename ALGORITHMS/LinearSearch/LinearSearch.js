const list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }

        return -1
    }
}