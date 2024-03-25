// There is a collection of input strings and a collection of query strings. For each query string,
// determine how many times it occurs in the list of input strings. Return an array of the results.

// Example:- strings = ['ab',' ab','abc'] queries = ['ab', ' abc','bc'] 
// There are 2 instances of 'ab', 1 of 'abc',0 of 'bc'. 
// For each query, add an element to the return array. results = [2,1,0]
//https://www.youtube.com/watch?v=J7SKTN8RKeM

const str = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

const solution1 = (str, queries) => {
    let temp = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (queries[i] === str[j]) {
                count++;
            }
        }
        temp.push(count);
    }
    return temp;
}

const solution2 = (inputs, queries) => {
    let words = {};
    for (let input of inputs) {
        words[input] = words.hasOwnProperty(input) ? words[input] + 1 : 1;
    }
    let results = [];
    for (let query of queries) {
        results.push(words.hasOwnProperty(query) ? words[query] : 0);
    }

    return results;
}

console.log(solution1(str, queries));
console.log(solution2(str, queries));