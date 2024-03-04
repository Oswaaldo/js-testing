// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]


const solution = picture => {
    let width = picture[0].length + 2;
    return ['*'.repeat(width), ...picture.map(line => `*${line}*`), '*'.repeat(width)];
}

let picture = ["abc", "def"];

console.log(solution(picture));