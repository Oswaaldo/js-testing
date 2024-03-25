//a = [1, 2, 4, 6, 13]
//returns true 1+2=4+6=13
//Return true the longest number is equal to sum of the remainder elements.

const solution = arr => {
    arr.sort((a, b) => a - b);
    let max = arr.pop();
    let sum = arr.reduce((a, c) => a + c);
    return sum === max;
}

const arr = [1, 2, 4, 6, 13];
console.log(solution(arr));
console.log(solution([1, 2, 3, 4, 24]));