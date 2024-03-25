//Capitalize first letter

const solution = str => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const str = 'osvAlDo';
console.log(solution(str));
