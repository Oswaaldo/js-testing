//Return true only if all values are unique, otherwise false
//Using Array, Object, String method lastIndexOf()
//no Set Data Sttructure

const solution1 = str => {
    str = str.toLowerCase();
    let temp = [];
    for (let i = 0; i < str.length; i++) {
        if (temp.indexOf(str[i]) !== -1) {
            return false;
        }
        else {
            temp.push(str[i]);
        }
    }
    return true;
}

const solution2 = str => {
    str = str.toLowerCase();
    let temp = {};
    for (let i = 0; i < str.length; i++) {
        if (temp.hasOwnProperty(str[i])) {
            return false;
        }
        else {
            temp[str[i]] = 'exists';
        }
    }
    return true;
}

const solution3 = str => {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
}


console.log(solution1('abcdefg'));
console.log(solution1('osvaldo'));

console.log(solution2('abcdefg'));
console.log(solution2('osvaldo'));