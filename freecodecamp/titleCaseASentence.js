// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

const solution1 = str => {
    const newTitle = str.split(' ');
    const updatedTitle = [];
    for (let i in newTitle) {
        updatedTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1).toLowerCase();
    }
    return updatedTitle.join(' ');
}

const solution2 = str => {
    return str
        .toLowerCase()
        .split(" ")
        .map(i => i.replace(i.charAt(0), i.charAt(0).toUpperCase()))
        .join(' ');
}

console.log(solution1("I'm a little tea pot"));
console.log(solution2("I'm a little tea pot"));