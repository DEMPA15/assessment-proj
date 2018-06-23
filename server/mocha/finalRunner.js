const expect = require('chai').expect
const mocha = require('mocha')

module.exports = function testRunner(path, assessmentName, qID) {
    return new Promise((resolve, reject) => {
        path = `../.${path}`
      delete require.cache[require.resolve(path)];
  
      const submission = require(path);
      const assertions = require(`./assertions/${assessmentName}/${qID}`)
  
      const Suite = mocha.Suite;
      const Test = mocha.Test;
      const Runner = mocha.Runner;
  
      const testSuite = new Suite(`${assessmentName} - ${qID}`, {subject: submission})
  
      assertions.forEach((test) => {
        testSuite.addTest(new Test( `${test.text}`, test.assertion))
      })
  
      const results = {
        qID: qID,
        passed: true,
        tests: []
      };
  
      const runner = new Runner(testSuite)
  
        runner.on('start', function(){
            console.log("Starting")
        })
  
        runner.on('pass', function(t){
            results.tests.push({text: t.title, passed: true})
  
        })
        runner.on('fail', function(t, e){
            results.tests.push({text: t.title, passed: false})
            results.passed = false
            console.log('failed: ' + e)
        })
  
        runner.on('end', function(){
            console.log("Ending")
        })
  
        runner.runTests(testSuite, function(failures){
          console.log(results)
          resolve(results);
  
          process.exitCode = failures ? -1 : 0;
        })
    })
  }
  