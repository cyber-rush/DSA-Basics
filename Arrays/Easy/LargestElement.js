// Method 1 : Brute force
function largestElement(arr) {
    arr.sort((a, b) => a - b)
    return arr[arr.length - 1]
}

// Method 2 : Optimal solution
var largestElement = (arr) => {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        largest = Math.max(largest, arr[i])
    }
    return largest
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];
console.log("The Largest element in the array is: " + largestElement(arr1));
console.log("The Largest element in the array is: " + largestElement(arr2));