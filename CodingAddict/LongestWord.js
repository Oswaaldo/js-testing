//Return the longest word 

const solution1 = str => {
    let words = str.split(' ');
    let temp = [''];
    let size = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= size) {
            size = words[i].length;
            if (temp[temp.length - 1].length < words[i].length) {
                temp = [];
                temp.push(words[i])
            } else {
                temp = [...temp, words[i]];
            }
        }
    }
    return temp;
}

const solution2 = str => {
    let temp = str.split(' ');
    let max = Math.max(...temp.map(i => i.length));
    return [...temp.filter(i => i.length === max)];
}

const s = 'jose osvaldo barajas juarez';
console.log(solution1(s));
console.log(solution2(s));