function countBs(s = "B") {
    return countChar(s, "B");
}

function countChar(s, c) {
    let uppercaseCount = 0;
    for (const char of s) {
        if(char == c) uppercaseCount++;    
    }
    return uppercaseCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));