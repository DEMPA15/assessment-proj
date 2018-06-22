// 1. Write a function that accept two integers as arguments and and logs the larger to the console.

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

// 2. Write a function that takes in an array of three numbers with a conditional statement to find the sign (positive or negative) of the product of those numbers. Log either "The sign is +" or "The sign is -".

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