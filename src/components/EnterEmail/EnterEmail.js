import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../redux/action-creators';
class EnterEmail extends Component {
  constructor (props){
    super(props)
    this.state = {
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.setEmail = this.setEmail.bind(this);
    
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  setEmail(){
    this.props.setEmail(this.state.email)
    this.props.history.push('/assessments')
  }
  _handleKeyPress = (event) => {
    if (event.key ==='Enter') {
      {this.setEmail()};
    }
  }
  render() {
    return (
      <div className = "email-container">
        <div className = "student-email">
          <div>
            <h1> Enter Email </h1>
            <h4> Test Results Will Be Sent To This Email </h4>
          </div>
          <div>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleChange} onKeyPress={this._handleKeyPress}/>
          </div>
          <div>
            <button onClick = {this.setEmail}>Submit</button>
          </div>
      </div> 
      </div>
    );
  }
}

export default connect(state => state, Actions)(EnterEmail);