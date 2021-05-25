function reverseArray(arr) {
    let reversedArray = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray;
}

function reverseArrayInPlace(arr) {
    let temp = 0, arrIndexLength = arr.length - 1;
    // only iterate for half of the array's length because the swap will meet half-way
    for(let i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arrIndexLength];
        arr[arrIndexLength] = temp;
        arrIndexLength--;
        // console.log(arr) // view the steps
    }
    
    return arr;
}

console.log(reverseArrayInPlace([5, 4, 3, 2, 1]));