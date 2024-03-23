//Get the intersection between two arrays

const solution = (arr1, arr2) => {
    let result = new Set();
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.add(arr1[i]);
            }
        }
    }
    return Array.from(result);
}

const arr1 = [4, 9, 5];
const arr2 = [9, 4, 9, 8, 4];
console.log(solution(arr1, arr2));