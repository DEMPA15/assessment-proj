import React, { Component } from 'react';


class ProgressBar extends Component {

 //needs state.questions.length to map through and render an image for each question. 
 //the image rendered depends on whether that question is passed or not 
 //use state.results.route's question number param.passed
 // be careful here with using the correct indexing.... index 0 will be question 1

 // needs to re-render everytime Run is clicked or route is changed


  render() {
    return (
      <div>
        ProgressBar
      </div>
    );
  }
}

export default ProgressBar;