function isEven(n) {
    // if n is less than 0 negate the - symbol
    if(n < 0) {
        n = -n;
    }
    if(n == 0) return true;
    else if(n == 1) return false;
    else return isEven(n - 2)
}

console.log(isEven(50))