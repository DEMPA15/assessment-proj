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

// 4. Write a function that takes in an array of numbers and returns an array without any duplicate numbers

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-14.php

// test 1 - Should return an array

// test 2 - Should contain no duplicate numbers

const duplicateNumericArray = [1, 1, 2, 2, 3, 2, 1, 4, 6, 6];
const duplicateNumericArray2 = [0, 2, -10, -10, 2, 0, 9];
const duplicateNumericArray3 = [-99, -99, -99, -99];
const duplicateNumericArray4 = [1, 2, 3, 4, 5];

function removeDuplicates(input) {
    const seen = {};
    const answer = [];

    for (let i = 0; i < input.length; i++) {
        seen[input[i]] = 0;
      }
    for (i in seen) {
        answer.push(i);
      }
      const realAnswer = answer.map(number => {
          return parseInt(number, 10);
      })
    return realAnswer;
}

function removeDuplicates2(array) {
    const answer = [];

    array.forEach((number, i) => {
        if (!answer.includes(number)) {
            answer.push(number);
        }
    })
    return answer;
};



console.log(removeDuplicates(duplicateNumericArray));
console.log(removeDuplicates(duplicateNumericArray2));
console.log(removeDuplicates(duplicateNumericArray3));
console.log(removeDuplicates(duplicateNumericArray4));

console.log(removeDuplicates2(duplicateNumericArray));
console.log(removeDuplicates2(duplicateNumericArray2));
console.log(removeDuplicates2(duplicateNumericArray3));
console.log(removeDuplicates2(duplicateNumericArray4));

// 5. Write a function that takes in two arrays: the first array contains the correct answers to an exam, like ["a", "a", "b", "d"], and the second contains a student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer (empty string).

// If the score is less than 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// https://www.codewars.com/kata/check-the-exam/train/javascript

// Test 1 - Returns a number

// Test 2 - Returns the correct answer

function checkExam(array1, array2) {
    let score = 0;

    array2.forEach((answer, i) => {
        if (answer === '') {
            score += 0;
        }
        else if (answer === array1[i]) {
            score += 4;
        }
        else if (answer !== array1[i]) {
            score -= 1;
        }
    })

    if (score < 0) {
        return 0
    }
    else {
        return score;
        }
   };

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
console.log(checkExam(["a", "b", "d", "c"], ["", "", "d", "d"]))
