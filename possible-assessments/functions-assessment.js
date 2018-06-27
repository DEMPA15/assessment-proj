// 1. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript

// test 1 - it's a function

// test 2 - returns name + " plays banjo" if the name starts with "R" or "r"

// test 3 - returns name + " does not play banjo" if the name does not start with "R" or "r"

function areYouPlayingBanjo(name) {
    const upperCaseName = name.toUpperCase();
    if (upperCaseName.charAt(0) === 'R') {
      return `${name} plays banjo`;
    }
    else {
      return `${name} does not play banjo`;
    }
  }

console.log(areYouPlayingBanjo('Ryan'));
console.log(areYouPlayingBanjo('rochelle'));
console.log(areYouPlayingBanjo('craig'));
console.log(areYouPlayingBanjo('linda'));

// 2. Write a function that takes in two parameters, "a" and "b". If one or both of the parameters is not a number, return false. If both parameters are numbers, return the remainder of "a" divided by "b" plus the remainder of "b" divided by "a".

// https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata

// test 1 - it's a function

// test 2 - returns false if one or both of the parameters is not a number

// test 3 - returns the correct value if both parameters are numbers

function weirdMath(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return false;
    } 
    else {
      return (a % b) + (b % a);
    }
  }

console.log(weirdMath(1, 2));
console.log(weirdMath(3, 12));
console.log(weirdMath(-47, 13));
console.log(weirdMath('weird', 'math'));
console.log(weirdMath(47, "Don't work please"));


// 3. Write a function that takes in an array of strings and returns a filtered array containing the same elements but with any string in the 'geese' array removed.

// https://www.codewars.com/kata/filter-out-the-geese/train/javascript

// test 1 - it's a function

// test 2 - the returned array doesn't include any 'geese'

// test 3 - the returned array includes all the non-geese from the input array

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

function gooseFilter(birds) {
    const newArray = birds.filter(bird => {
        return !geese.includes(bird);
    })
    return newArray;
}

console.log(gooseFilter(birds));

// 4. Write a function that takes in an array of integers and returns the sum of all unique integers in the array.

// https://www.codewars.com/kata/unique-sum/train/javascript

// test 1 - it's a function

// test 2 - returns a number

// test 3 - returns the correct answer

const arrayToTest = [ -1, -1, 5, 2, -7] 

function uniqueSum(arr) {
    if (arr.length === 0) {
        return null;
    }
    else {
        const arrayToCheck = []
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (!arrayToCheck.includes(arr[i])) {
                arrayToCheck.push(arr[i]);
                sum += arr[i];
            }
        }
        return sum;
    }
}

console.log(uniqueSum(arrayToTest));
console.log(uniqueSum([24, -47, 33, 33, 24, 33, -99]));
console.log(uniqueSum([1, 1, 2, 3, 5, 8, 13]));
console.log(uniqueSum([99, 88, 99, 88, -47, 200, 99, 88, 77]));
console.log(uniqueSum([]));


// 5. Write a function that takes in two parameters: "audioLength", a string with the total time of an audio file in the form of "hh:mm:ss", and playSpeed, a number between 0.5 and 3.0. The function should return a string in the form "hh:mm:ss" that is "audioLength" played at a differen playSpeed.

// https://www.codewars.com/kata/podcast-speed-listening-calculator/train/javascript

// test 1 - it's a function

// test 2 - returns a string in the correct format

// test 3 - returns the correct answer

function speedListen(audioLength, playSpeed) {

    const audioLengthArray = audioLength.split(':')  ;

    const audioLengthArrayNumbers = audioLengthArray.map(number => parseInt(number, 10));

    const totalSecondsOriginal = (audioLengthArrayNumbers[0] * 3600) + (audioLengthArrayNumbers[1] * 60) + (audioLengthArrayNumbers[2]);
    
    const newAudioLengthSeconds = Math.floor(totalSecondsOriginal / playSpeed);

    let finalHours;

    const hours = Math.floor(newAudioLengthSeconds / 3600);
    if (hours < 10) {
        finalHours = `0${hours}`
    }
    else {
        finalHours = hours;
    }

    let finalMinutes;

    const minutes = Math.floor((newAudioLengthSeconds - (hours * 3600)) / 60);
    if (minutes < 10) {
        finalMinutes = `0${minutes}`;
    }
    else {
        finalMinutes = minutes;
    }

    let finalSeconds;

    const seconds = Math.floor(newAudioLengthSeconds - (hours * 3600) - (minutes * 60));
    if (seconds < 10) {
        finalSeconds = `0${seconds}`;
    }
    else {
        finalSeconds = seconds;
    }

    const newAudioLength = `${finalHours}:${finalMinutes}:${finalSeconds}`;
    
    return newAudioLength;
  }

  console.log(speedListen("01:02:55", 2));
  console.log(speedListen('02:46:45', 0.5));
  console.log(speedListen('08:34:12', 1.2));