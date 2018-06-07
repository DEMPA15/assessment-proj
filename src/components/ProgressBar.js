import React, { Component } from 'react';

class ProgressBar extends Component {

 //-------better solution
 // map through state.results to render correct icons
 // use state.results[route's questionNumber param].passed
 // be careful here with using the correct indexing.... index 0 will be question 1

 // when icon is clicked navigates to the correct question

 // needs to re-render every time Run is clicked or route is changed


  render() {
    return (
      <div>
        ProgressBar
      </div>
    );
  }
}

export default ProgressBar;