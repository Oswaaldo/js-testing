
//Get the index of two elements that add up to the same as the target.

const firstList = [2, 7, 11, 15];
const secondList = [3, 2, 3];
const thridList = [3, 3];
const target = 9;

const solution1 = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && i !== j) {
                return [i, j];
            }
        }
    }
    return -1;
}

const solution2 = (arr, target) => {
    let hash = {};
    arr.forEach((item, index) => {
        hash[item] = index;
    })

    for (let i = 0; i < arr.length; i++) {
        let targetMinusItem = target - arr[i];
        if (hash[targetMinusItem] !== undefined && hash[targetMinusItem] !== i) {
            return [hash[targetMinusItem], i];
        }
    }
    return -1;
}



console.log(solution2(firstList, target));