import React, { Component } from 'react';
import './SplashPage.css'
import {withRouter} from 'react-router-dom';

class SplashPage extends Component {

  handleClick(){
    this.props.history.push('/assessments')
  }
  render() {
    return (
      <div className="splash-main">
       <h1>Code Bar</h1>
        <div className="splash-assessments-select">
          <button onClick={()=>{this.handleClick()}}>Get Assessments</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage);