higherOrderFunctions = { 
    name: "higher-order-functions", 
    questions: [
        {
            qID: "Q1", 
            qText: "Take in an array of numbers and use Array.prototype.reduce to return the sum of all elements", 
            tests: [
                "Should return a number", 
                "Should use Array.prototype.reduce",
                "Number should be the sum of all numbers in the array"
            ]
        }, 
        {
            qID: "Q2", 
            qText : "Write a function that Take in an array of numbers Use Array.prototype.filter to return a new array with only the numbers that are greater than 10", 
            tests: [
                "Should return an array", 
                "Should use Array.prototype.filter",
                "Array should consist of only numbers that are greater than 10",
                "Array should contain all of the correct numbers"
            ]
        }, 
        {
            qID: "Q3", 
            qText: "Write a function that takes in an array and a number(index). Use Array.prototype.splice to remove the element at the index (number passed in) and replace it with the string ‘replaced’", 
            tests: [
                "Should return an array", 
                "Should use Array.prototype.splice",
                "Should replace the correct element in the array with the word 'replaced'", 
            ]
        }, 
        {
            qID: "Q4", 
            qText: "Write a function that takes in the array and a string. Use Array.prototype.includes to return true if the array includes the string and false if it does not", 
            tests: [
                "Should return a boolean", 
                "Should use Array.prototype.includes",
                "Should return true if the string is in the array",
			    "Should return false if the string is not in the array"
            ]
        }, 
        {
            qID: "Q5", 
            qText: "Write a function that takes in an array and uses Array.prototype.map to return a new array with all strings capitalized", 
            tests: [
                "Should return an array", 
                "Should use Array.prototype.map",
                "Should return an array with all elements capitalized"
            ]
        }, 
        {
            qID: "Q6", 
            qText: "Write a function that takes in an array of numbers and uses Array.prototype.sort to return the array sorted from largest to smallest", 
            tests: [
                "Should return an array", 
                "Should use Array.prototype.sort",
                "Array should be sorted from largest to smallest", 
            ]
        }
    ]
}
