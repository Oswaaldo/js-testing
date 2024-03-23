// Problem Statement
// Given an array of integers and a value, determine if there are any two integers in the array 
// whose sum is equal to the given value. 
// Return true if the sum exists and return false if it does not.

const solution = (a, target) => {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] + a[j] === target && i !== j) {
                return [a[i], a[j]];
            }
        }
    }
    return false;
}

const a = [5, 7, 1, 2, 8, 4, 3];
const target = 9;
console.log(solution(a, target));