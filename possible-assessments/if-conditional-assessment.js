// 1. Write a function that accept two integers as arguments 
// and and logs the larger to the console.

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-1.php

// test 1 - it's a function

// test 2 - logs the larger number

function displayLarger(first, second) {
    let result;
    if (first > second) {
        result = first;
        console.log(first);
        return result;
    }
    else if (second > first ) {
        result = second;
        console.log(second);
        return result;
    }
    else {
        console.log('Please enter two integers that have different values');
        return 'Please enter two integers that have different values';
    }
}

console.log(displayLarger(1, 2));
console.log(displayLarger(6, 4));
console.log(displayLarger(2, 2));

// 2. Write a function that takes in an array of three 
// numbers with a conditional statement to find the sign 
//(positive or negative) of the product of those numbers. 
// Log either "The sign is +" or "The sign is -".

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-2.php

// test 1 - It's a function

// test 2 - If the sign of the product is positive, then the console logs "The sign is +"

// test 3 - If the sign of the product is negative, then the console logs "The sign is -"

const firstThree = [1, -2, 3];
const secondThree = [-1, 3, -4];
const thirdThree = [-2, -4, -6];
const fourthThree = [3, 6, 9];
const fifthThree = [0, 2, 3];

function productOfThree(array) {
    const product = array[0] * array[1] * array[2];
    if (product < 0) {
        console.log('The sign is -');
        return "The sign is -";
    }
    else if (product > 0) {
        console.log("The sign is +");
        return "The sign is +";
    }
    else {
        console.log('What are you doing?')
        return 'What are you doing?';
    } 

}
console.log(productOfThree(firstThree));
console.log(productOfThree(secondThree));
console.log(productOfThree(thirdThree));
console.log(productOfThree(fourthThree));
console.log(productOfThree(fifthThree));

// 3. Write a function that takes a string as an argument. 
// Return an array containing the indexes of each capitalized letter. 
// If there are no capitalized letters, 
// return a string that says "There are no capitalized letters".

// https://www.codewars.com/kata/find-the-capitals-1/train/javascript

// test 1 - it's a function

// test 2 - it returns an array if there are capitalized letters

// test 3 - it returns the string "There are no capitalized letters" if there are no capitalized letters.

// test 4 - returns the correct index values if there are capitalized letters.

function findCapitals(word) {
    let indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/[a-z]/i)) {
            if (word[i] === word[i].toUpperCase()) {
                indexes.push(i);
            }
        }
    }
    if (indexes.length > 0) {
        return indexes;
    }
    else {
        return "There are no capitalized letters";
    }
}
 console.log(findCapitals('HeLlo'))
console.log(findCapitals('GilRoY'));
console.log(findCapitals(''));
console.log(findCapitals('no caps'));
console.log(findCapitals('ALL CAPS'));

// 4. Write a function that takes in an array of numbers 
// and returns the highest number.

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-3.php

// test 1 - it's a function

// test 2 - returns a number

// test 3 - returns the highest number

const fiveNumbers = [2, 4, -9, 3, 16];
const fiveMoreNumbers = [13, 57, -9, -100, 14];
const numbersUnderZero = [-101, -209, -99, -1, -5];
const highToLow = [99, 98, 97, 96, 95];
const lowToHigh = [-99, - 98, -97, -96, -95];

function largestNumber(array) {
    let highestNumber;
    for (let i = 0; i < array.length; i ++) {
        if (i === 0) {
            highestNumber = array[i];
        }
        if (array[i] > highestNumber) {
            highestNumber = array[i];
        }
    }
    return highestNumber;
}

console.log(largestNumber(fiveNumbers));
console.log(largestNumber(fiveMoreNumbers));
console.log(largestNumber(numbersUnderZero));
console.log(largestNumber(highToLow));
console.log(largestNumber(lowToHigh));

// 5. Write a function that takes in an array of integers and 
// returns an array with all the even integers on the left of all the odd integers, 
// with the even integers in ascending order and the odd integers in descending order. 
// For example, [-10, 1, 4, 6, 5] should become [-10, 4, 6, 5, 1]. 
// The input array will not include a zero. 

// https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript

// test 1 - it's a function

// test 2 - returns an array

// test 3 - the returned array only contains values that were in the input array

// test 4 - the returned array's length is the same as the input array's length

// test 5 - the returned array contains even numbers on the left and odd numbers on the right.

function oddFunction (array) {
    const evens = [];
    const odds = [];
    array.forEach(number => {
        if (number % 2 === 1 || number % 2 === -1 ) {
            odds.push(number);
        }
        if (number % 2 === 0) {
            evens.push(number);
        }
    })
    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);
    const results = [...evens, ...odds];
    return results;
}

console.log(oddFunction(fiveMoreNumbers));
console.log(oddFunction(fiveNumbers));
console.log(oddFunction(numbersUnderZero));