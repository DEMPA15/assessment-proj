import React, { Component } from 'react';
import './EnterEmail.css';

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
            <button onClick = {this.handleChange}>Submit</button>
          </div>
     
     </div> 
    );
  }
}

export default EnterEmail;