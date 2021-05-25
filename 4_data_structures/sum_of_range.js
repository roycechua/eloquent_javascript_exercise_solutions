function range(start = 0, end, step = 1) {
    const arr = [];
    for(let n = 1; n <= end; n+=step) {
        arr.push(n);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for(num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sum(range(1, 10)));