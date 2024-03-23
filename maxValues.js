//Find de max value
const solution = inputArray => {
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(i => i.length === maxSize);
}

const str1 = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solution(str1));