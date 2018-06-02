//This file will contain our axios calls that go through redux



//--------Get Questions
// These should be organized on the back end before coming to the front and being set to redux

//format
[
    {
        q: 'Q1',
        qText: '',
        qID: '',
        testText: {
            T1: '',
            T2: '',
            T3: ''
        }
    }, 
    {
        q: 'Q2',
        qText: '',
        qID: '',
        testText: {
            T1: '',
            T2: ''
        }
    }, 
    {
        q: 'Q3',
        qText: '',
        qID: '',
        testText: {
            T1: '',
        }
    }
]


//-------- Post results
//sends code from redux ---stringify--- to backend to be tested and posts results to redux
// The results should be formatted on the backend before coming to the front. 

//format

[{
    q: 'Q1',
    passed: false,
    code: '',
    tests: {
        T1: false, 
        T2: false,
        T3: false
    }
}]
