objects = { 
    name: "objects", 
    questions: [
        {
            qID: "Q1", 
            qText: "Write a function that takes in an object and returns an array of all the object’s keys", 
            tests: [
                "Should return an array", 
                "Array should contain all keys of the passed in object"
            ]
        }, 
        {
            qID: "Q2", 
            qText : "Write a function that takes in the object below and deletes the rollno property. Then return the object. ***let student = {\n name: 'David Rayy',\n sclass: 'VI',\n rollno: 12\n}***", 
            tests: [
                "Should return an object", 
                "Object should not contain the rollno property"
            ]
        }, 
        {
            qID: "Q3", 
            qText: "Write a function that takes in an object and returns its length", 
            tests: [
                "Should return a number", 
                "Should return the objects correct length", 
            ]
        }, 
        {
            qID: "Q4", 
            qText: "Write a function that takes in the array of objects below and returns an array of the books (name and author) that still need to be read. Each element in the array should resemble the string ‘The Road Ahead by Bill Gates’***const library = [\n {\n  author: 'Bill Gates',\n  readingStatus: true\n },\n {\n  title: 'Mistborn',\n  author: 'Brandon Sanderson',\n  readingStatus: false\n },\n {\n  title: 'Mockingjay: The Final Book of The Hunger Games',\n  author: 'Suzanne Collins',\n  readingStatus: false\n }\n];***", 
            tests: [
                "Should return an array", 
                "Each array element should contain a book title and author",
			    "The array should contain all of the correct values"
            ]
        }, 
        {
            qID: "Q5", 
            qText: "Write a function that takes in an object and a variable. Check to see if the object has a property with the name of the variable passed in. If it does, return the value of that property. If it does not, return ‘No property found.’", 
            tests: [
                "Should return the correct value", 
                "Should return ‘No property found.’ if the property does not exist"
            ]
        }, 
        {
            qID: "Q6", 
            qText: "Write a function that takes in the object below, a person’s name and a color. Return the make of the person’s car that matches the color passed in.***const contacts = {\n Jon: { \n  house: 'Apartment',\n  children: {\n   Kyle: 4,\n   Jessica: 2 },\n  cars: [\n   {\n    make: 'Toyota',\n    model: '4-Runner',\n    color: 'blue'\n   },\n   {\n    make: 'Honda',\n    model: 'Civic',\n    color: 'silver'\n   }\n  ]\n },\n Bob: {\n  house: 'Condo',\n  children: {\n   Jan: 11,\n   Brittney: 15 },\n  cars: [\n   {\n    make: 'Ford',\n    model: 'F-150',\n    color: 'blue'\n   },\n   {\n    make: 'Honda',\n    model: 'Del Sol',\n    color: 'red'\n   }\n  ]\n }\n}***", 
            tests: [
                "Should return a string", 
                "Should return the correct make of the vehicle", 
            ]
        }
    ]
}
