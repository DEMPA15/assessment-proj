import React, { Component } from 'react';

 class QuestionText extends Component {
  
  render() {
    return (
      <div>
         <div>
          <h2>Question + {this.props.qID} </h2> 
          <input type="text" value ={this.props.questions[this.props.qIndex].qText} />
          </div>
      </div>    
    );
  }
}

export default QuestionText;