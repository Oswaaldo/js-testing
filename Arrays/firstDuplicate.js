// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the minimal index. 
// In other words, if there are more than 1 duplicated numbers, return the number for 
// which the second occurrence has a smaller index than the second occurrence of the other number does. 
// If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.

const solution = arr => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) > 0) {
            return arr[i];
        } else {
            temp.push(arr[i]);
        }
    }
    return -1;
}

const a = [2, 1, 3, 5, 3, 2];
console.log(solution(a));

