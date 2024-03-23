// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.

const solution1 = (str, num) => {
    let temp = '';
    for (let i = 0; i < num; i++) {
        temp += str;
    }
    return temp;
}

const solution2 = (str, num) => {
    if (num < 1) {
        return "";
    } else {
        return str + solution2(str, num - 1);
    }
}

console.log(solution1('abc', 5));
console.log(solution2('abc', 5));