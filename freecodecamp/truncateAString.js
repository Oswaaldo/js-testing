// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

const solution1 = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

const solution2 = (str, num) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

console.log(solution1("A-tisket a-tasket A green and yellow basket", 8));
console.log(solution2("A-tisket a-tasket A green and yellow basket", 8));