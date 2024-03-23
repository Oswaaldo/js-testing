
const solution = a => {

    //calculate sum of all integers
    //input list
    let actualSum = a.reduce((a, c) => a + c);

    let n = a.length + 1;

    //find the sum of first n numbers using the arithmetic series sum formula
    //i.e., (n * (n + 1)) / 2;
    let sumOfN = (n * (n + 1)) / 2;

    //the difference between sumOfN - actualSum, is the missing number in the array
    return sumOfN - actualSum;
}

const a = [1, 2, 3, 5];

console.log(solution(a));