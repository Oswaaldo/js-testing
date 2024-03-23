// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

const str = "The quick brown fox jumped over the lazy dog";

const solution1 = str => {
    return Math.max(...str.split(" ").map(i => i.length));
}

const solution2 = str => {
    let temp = str.split(" ");
    let maxLength = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length > maxLength) {
            maxLength = temp[i].length;
        }
    }
    return maxLength;
}

console.log(solution1(str));
console.log(solution2(str));