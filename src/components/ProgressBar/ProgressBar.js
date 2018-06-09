import React, { Component } from 'react';

class ProgressBar extends Component {

 //-------better solution
 // map through state.results to render correct icons
 // use state.results[this.props.qID].passed

 // when icon is clicked navigates to the correct question



  render() {
    return (
      <div>
        ProgressBar
      </div>
    );
  }
}

export default ProgressBar;