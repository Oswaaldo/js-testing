//Count the number of repetitions of each letter in the string.
const solution = str => {
    let result = {};
    str = str.toLowerCase();
    for (let word of str) {
        result[word] = result.hasOwnProperty(word) ? result[word] + 1 : 1;
    }
    return result;
}
const str = 'Osvaldo';
console.log(solution(str));