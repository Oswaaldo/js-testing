//Find the longest word in a string 

const solution = str => {
    let temp = str.split(" ");
    let maxSize = Math.max(...temp.map(x => x.length));
    return temp.filter(x => x.length === maxSize);
}

const str = 'jose osvaldo barajas juarez';
console.log(solution(str));
