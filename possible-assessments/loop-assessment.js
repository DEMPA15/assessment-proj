// 1. Write a function that takes in a number and creates an array with values from 0 to the input number. Return the created array.

// From the assessments we took

// test 1 - must be a function

// test 2 - must return the correct array

function numberArray(num) {
    const numbers = [];
    for (let i = 0; i < num + 1; i++) {
        numbers.push(i);
    }
    return numbers;
};

console.log(numberArray(0));
console.log(numberArray(3));
console.log(numberArray(10));

// 2. Write a function that takes in a string and returns a string with each character of the input string repeated once. For example, inputting "string" will return "ssttrriinngg".

// https://www.codewars.com/kata/double-char/train/javascript

// test 1 - it's a function

// test 2 - returns a string

// test 3 - returns a string with each character repeated once

function doubleChar(str) {
    let result = ''
    for (let i = 0; i < str.length; i ++) {
        result += str[i] + str[i];
    }
    return result
  }

console.log(doubleChar('string'));


// 3. Write a function with a for loop that will iterate from 0 to 15. For each iteration, it will check if the current iteration number is odd or even, and display a message to the console.

// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
// ---------- 
// ---------- 

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php

// test 1 - must be a function
// test 2 - must contain a for loop
// test 3 - must accurately display whether the number is even or odd

function evenOrOdd() {
    const arrayToReturn = []
    for (let i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            arrayToReturn.push(`${i} is even`)
            console.log(`${i} is even`)
        }
        else {
            arrayToReturn.push(`${i} is odd`)
            console.log(`${i} is odd`)
        }
    }
    return arrayToReturn;
}

console.log(evenOrOdd());

// 4. Write a function that takes in an array containing arrays full of numbers. For each array of numbers within that array, find the average. Then return the sum of all the averages, rounded down to the nearest integer.

// test 1 - it's a function

// test 2 - returns a number

// test 3 - returns the correct number


const sampleArray = [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]

function sumAverage(arr) {
    function getSum(total, num) {
        return total + num;
    }
    const averagesToAdd = arr.map((arrayOfNums, i) => {
        let sum = 0;
        arrayOfNums.forEach((num, i) => {
            sum += num;
        })
        const average = sum / arrayOfNums.length;
        return average;
    })
    const result = Math.floor(averagesToAdd.reduce(getSum));
    return result;
  }

console.log(sumAverage(sampleArray));



// 5. Write a function that iterates through an array of "student" objects, and adds a "grade" property based on that's student's "percentage" property. Return an array with each object having a name, percentage, and grade properties.

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-6.php

// test 1 - it's a function
// test 2 - each object in the array has a grade property
// test 3 - the grade for each object has the correct value based on the "grades" object

const studentArray = [
    {
        name: 'David',
        percentage: 80
    },
    {
        name: 'Vinoth',
        percentage: 77
    },
    {
        name: 'Divya',
        percentage: 88
    },
    {
        name: 'Ishitha',
        percentage: 95
    },
    {
        name: 'Thomas',
        percentage: 68
    },
    {
        name: 'Anna',
        percentage: 32
    },
    {
        name: 'Emmanuel',
        percentage: 90
    }
]

const grades = {
    F: '<59.9',
    D: '60-69.9',
    C: '70-79.9',
    B: '80-89.9',
    A: '90-100'
}

function addGrades(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].percentage < 60) {
            array[i].grade = 'F';
        }
        else if (array[i].percentage >= 60 && array[i].percentage < 70) {
            array[i].grade = 'D';
        }
        else if (array[i].percentage >= 70 && array[i].percentage < 80) {
            array[i].grade = 'C';
        }
        else if (array[i].percentage >= 80 && array[i].percentage < 90) {
            array[i].grade = 'B';
        }
        else if (array[i].percentage >= 90) {
            array[i].grade = 'A';
        }
    }
    return array;
}

console.log(addGrades(studentArray));

