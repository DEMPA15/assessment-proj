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
   this.handleSubmit = this.handleSubmit.bind(this);
   this.setEmail = this.setEmail.bind(this);
    
  }

   handleChange(event) {
          this.setState({
          email: event.target.value
          });
          if (this.state.email){
            return document.getElementById('email-input').style.borderBottom = "1px #328cc1 solid";
          }
      }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.email) {
      return document.getElementById('email-input').style.borderBottom = "1px red solid";
    } else {
    this.setEmail();
  };
}

  setEmail() {
    this.props.setEmail(this.state.email)
    this.props.history.push('/assessments')

  }

  render() {
    return (
      <div className = "email-container">
        <div className = "student-email">
        <form onSubmit = {this.handleSubmit}>
          <div>
            <h1> Enter Email </h1>
            <h4> Test Results Will Be Sent To This Email </h4>
          </div>
          <div>
            <input id='email-input' type="email" autoFocus placeholder="Email"  value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div>
            <button type= "submit">Submit</button>
          </div>
      </form> 
      </div>
    </div>  
    );
  }
}

export default connect(state => state, Actions)(EnterEmail);