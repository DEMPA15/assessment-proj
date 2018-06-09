import React, { Component } from 'react';
import './EnterEmail.css';
import {connect} from 'react-redux';
import * as Actions from '../../redux/action-creators';
class EnterEmail extends Component {
  constructor (props){
    super(props)
    this.state = {
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  submitEmail(){
    this.props.submitEmail(this.state.email)
    this.props.history.push('/assessments')
  }

  render() {
    return (
      <div className = "student-email">
          <div>
            <h1> Enter Email </h1>
          </div>
          <div>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div>
            <button onClick = {this.submitEmail}>Submit</button>
          </div>
     
     </div> 
    );
  }
}

export default connect(state => state, Actions)(EnterEmail);