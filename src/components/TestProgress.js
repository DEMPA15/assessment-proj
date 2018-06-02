import React, { Component } from 'react';


class TestProgress extends Component {

 //needs state.results[route's questionNumber param].tests to map through each test and 
 //render the appropriate image depending on its boolean

 //needs state.questions[route's questionNumber param].testText to map through each and render the text

 //needs to re-render every time Run is clicked or the route changes

 //be careful to make sure test-text matches the correct test-boolean

  render() {
    return (
      <div>
        TestProgress
      </div>
    );
  }
}

export default TestProgress;