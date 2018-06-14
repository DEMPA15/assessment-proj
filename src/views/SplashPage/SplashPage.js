import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import img from '../../assets/dm-Logo-blue.png';

class SplashPage extends Component {

  handleClick(){
    this.props.history.push('/email')
  }

//background gray text white rounded corners

  render() {
    return (
      <div className="splash-main">
        <img src={img} className="splash-img"/>
       <h1>Code Bar</h1>
        <div className="splash-assessments-select">
          <button onClick={()=>{this.handleClick()}}>Get Assessments</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage);