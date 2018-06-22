// 1. Write a function that takes in an array of strings and returns a filtered array containing the same elements but with the any string in the "geese" array removed.

// https://www.codewars.com/kata/filter-out-the-geese/train/javascript

// test 1 - it's a function

// test 2 - the returned array doesn't include any "geese"

// test 3 - the returned array includes the non-geese in the input array

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter(birds) {
    const newArray = birds.filter(bird => {
        return !geese.includes(bird);
    })
    return newArray;
}

console.log(gooseFilter(birds));

