//Reverse a string

const str = "Osvaldo";

const solution1 = str => {
    let temp = str.split('');
    return temp.reverse().join('');
}

const solution2 = str => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(solution2(str));