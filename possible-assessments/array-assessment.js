// 5. Write a JavaScript program to remove duplicate items from an input array (ignore case sensitivity).

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-14.php

// test 1 - make sure it's a function

// test 2 - make sure it ignores case sensitivity

// test 3 - make sure there are no duplicate items

const duplicateArray = ['Red', 'Blue', 'blue', 'YELLOW', 'yellow', 'YeLlOw']
const duplicateNumericArray = [1, 1, 2, 2, 3, 2, 1, 4, 6, 6]

function removeDuplicates(input) {
    const arr = input.map(x => typeof x === 'string' ? x.toLowerCase() : x);
    let seen = {};
    let out = [];
    let len = arr.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
        let item = arr[i];
        if (typeof item === 'string') {

        }
        if (seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

console.log(removeDuplicates(duplicateArray));

console.log(removeDuplicates(duplicateNumericArray));
