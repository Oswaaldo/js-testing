// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

const num = 5;

const solution1 = num => {
    let i = 1;
    let count = 1;
    while (i <= num) {
        count *= i;
        i++;
    }
    return count;
}

const solution2 = num => {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count *= i;
    }
    return count;
}

console.log(solution1(num));
console.log(solution2(num));