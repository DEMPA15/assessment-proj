//This file will contain our axios calls that go through redux



//--------Get Questions
// These should be organized on the back end before coming to the front and being set to redux

//format
[
    {
        qID: 'Q1',
        qText: '',
        testText: []
    }, 
]


//-------- Post results
//sends code from redux ---stringify--- to backend to be tested and posts results to redux
// The results should be formatted on the backend before coming to the front. 

//format

[
    {
        qID: '',
        passed: false, 
        tests: [
            {
                text: '',
                passed: true
            }
        ]
    } 
]
