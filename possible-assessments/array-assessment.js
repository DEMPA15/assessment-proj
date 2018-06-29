// 2. Write a function that takes in an array of integers and returns an array that matches this format: [youngest age, oldest age, difference beteen the youngest and oldest age].

// https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members/train/javascript

// 1. Returns an array

// 2. Returns an array with the correct order of youngest age, oldest age, and the difference between youngest and oldest ages.

const numbersToTest = [6, 99, -2, 14, 56];

function differenceInNumbers (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

console.log(differenceInNumbers(numbersToTest));

// 3. Write a function that takes in an array, and returns an array with the input array items in alphanumeric order. The input array will include either only strings or only numbers.

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