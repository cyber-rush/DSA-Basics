// Method 1: Brute force--> O(nlogn) If no duplicates are there
function secondLargest(arr) {
    arr.sort((a, b) => a - b)
    return arr[arr.length - 2]
}

//Method 2: Better Solution --> O(n + n)
var secondLargest = (arr) => {
    let largest = -Infinity
    let secLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        largest = Math.max(arr[i], largest)
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secLargest && arr[i] !== largest) {
            secLargest = arr[i]
        }
    }

    return secLargest
}

// Method 3: Optimal Solution --> O(n)
var secondLargest = (arr) => {
    let largest = -Infinity
    let secLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLargest = largest
            largest = arr[i]
        }
        else if (arr[i] > secLargest && arr[i] !== largest) {
            secLargest = arr[i]
        }
    }

    return secLargest
}


const arr = [1, 2, 4, 6, 7, 5];
console.log(secondLargest(arr));