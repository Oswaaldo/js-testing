// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

const solution = (str1, str2) => {
    let count = 0;
    for (let char of str1) {
        if (str2.indexOf(char) !== -1) {
            count++;
            str2 = str2.replace(char, '');
        }
    }
    return count;
}

let s1 = "aabcc";
let s2 = "adcaa";

console.log(solution(s1, s2));