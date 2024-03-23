
// Some people are standing in a row in a park. 
//There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// const solution = arr => {
//     let s = arr.filter(i => i > 0).sort((a, b) => a - b);
//     return a.map(p => {
//         if (p !== -1) {
//             return s.shift();
//         }
//         return -1;
//     });
// };

let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let positiveSorted = a.filter(i => i > 0).sort((a, b) => a - b);

let result = a.map(i => {
    if (i !== -1) {
        return positiveSorted.shift();
    }
    return -1;
})


console.log(a);
console.log(result);