//Given a string, reverse only the letters

const isLetter = char => (/[a-zA-Z]/).test(char);

const solution = str => {
    let reversed = '';
    let j = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            while (isLetter(str[j]) === false) {
                j--;
            }
            reversed += str[j];
            j--;
        }
        else {
            reversed += str[i];
        }
    }
    return reversed;
}

const str = 'osvaldo_Barajas-Juarez';
console.log(solution(str));