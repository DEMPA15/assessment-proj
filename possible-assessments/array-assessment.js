// Arrays

// 1. Write a JavaScript function to check whether an `input` is an array or not. Return true if the input is an array, and return false if the input is not an array.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php

// test 1 - make sure that it's function

// test 2 - returns true if the input is an array

// test 3 - returns false if the input is not an array.

function checkArray(input) {
    if (input.constructor === Array) {
        return true;
    }
    else return false;
}

console.log(checkArray(1));
console.log(checkArray([1]));

// 2. Write a JavaScript function to clone an inputed array.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-2.php

// test 1 - make sure it's a function

// test 2 - make sure it doesn't just return the same array

// test 3 - make sure it returns a copy of the inputed array

const arrayToClone = [1, 2, 3, 4, 5, 6]

function cloneArray(input) {
    const newArray = input.slice();
    return newArray;
}

console.log(cloneArray(arrayToClone));

// 3. Write a JavaScript program that takes in an array, and returns an array with the inputed array items in alphanumeric order. The input array will include either only strings or only numbers.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-7.php

// test 1 - make sure it's a function

// test 2 - if the array includes strings, make sure that an array is returned in alphabetical order

// test 3 - if the array includes numbers, make sure that an array is returned in numeric order

const alphabeticArray = ['Washer', 'Dryer', 'Yarn', 'Acid', 'Lovely'];

const numericArray = [33, 100, 9, 45, 1, 330, 3200];

function returnSortedArray(input) {
    if (typeof input[0] === 'number') {
        function sortNumber(a, b) {
            return a - b;
        }

        return input.sort(sortNumber);
    }
    else return input.sort();
}

console.log(returnSortedArray(alphabeticArray));

console.log(returnSortedArray(numericArray));

// 4. Write a JavaScript program to remove duplicate items from an input array (ignore case sensitivity).

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

// 5. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-21.php

// test 1 - make sure it's a function

// test 2 - make sure it returns a flattened array with the same values

const shallowArray = [1, 2, 3, 4, 5]
const slightlyDeepArray = [1, [2, 3, 4, 5]];
const crazyDeepArray = [1, [2, 6, [3, 7, [4, 8, [5, 9]]]]];

const flatten = (array, shallow, results) => {
    if (!results) {
         results = []; 
        }

    if (shallow) {
        return results.concat(...array);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].constructor == Array) {
            flatten(array[i], shallow, results);
        } 
        else {
            results.push(array[i]);
        }
    }
    return results;
};

console.log(flatten(shallowArray));
console.log(flatten(slightlyDeepArray));
console.log(flatten(crazyDeepArray));
