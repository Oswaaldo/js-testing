// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array.

const solution1 = (arr, size) => {
    let temp = [];
    let i = 0;
    while (i < arr.length) {
        temp.push(arr.slice(i, i + size));
        i = i + size;
    }
    return temp;
}

const solution2 = (arr, size) => {
    let temp = [];
    for (let i = 0; i < arr.length; i += size) {
        temp.push(arr.slice(i, i + size));
    }
    return temp;
}

console.log(solution1(["a", "b", "c", "d"], 2));
console.log(solution1([0, 1, 2, 3, 4, 5], 3));
console.log(solution1([0, 1, 2, 3, 4, 5], 2));

console.log(solution2(["a", "b", "c", "d"], 2));
console.log(solution2([0, 1, 2, 3, 4, 5], 3));
console.log(solution2([0, 1, 2, 3, 4, 5], 2));


