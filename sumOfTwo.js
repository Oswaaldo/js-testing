//You have two integer arrays, a and b, and an integer target value v.
//Determine whether there is a pair of numbers, where one number is taken from a
//and the other from b, that can be added together to get a sum of v.
//Return true is such a pair exists, otherwise return false.
//url: https://www.youtube.com/watch?v=SW9JoBfzjYw&list=PLMjpKYvSgVZPHc8aCCW-_WdBC5JptIZQ3&index=2

const solution1 = (a, b, target) => {
    for (let i = 0; i < a.length; i++) {
        let needed_value = target - a[i];
        for (let j = 0; j < b.length; j++) {
            if (needed_value === b[j]) {
                return true;
            }
        }
    }
    return false;
}

const solution2 = (a, b, target) => {
    for (let i = 0; i < a.length; i++) {
        let needed_value = target - a[i];
        if (b.indexOf(needed_value) !== -1) {
            return true;
        }
    }
    return false;
}

const a = [1, 2, 3];
const b = [10, 20, 30, 40];
const target = 50;

console.log(solution1(a, b, target));
console.log(solution2(a, b, target));