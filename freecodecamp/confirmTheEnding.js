// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

const solution1 = (str, target) => {
    return str.slice(-target.length) === target;
}

const solution2 = (str, target) => {
    return str.slice(str.length - target.length) === target;
}


console.log(solution1("Congratulation", "tion"));
console.log(solution2("Congratulation", "tion"));