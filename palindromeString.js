const solution = str => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed.toLocaleLowerCase() === str.toLocaleLowerCase();
}
const str = 'Radar';
console.log(solution(str));