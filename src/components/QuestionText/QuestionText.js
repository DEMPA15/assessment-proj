import React, { Component } from 'react';
import { connect } from 'react-redux';
import './questionText.css';


 class QuestionText extends Component {
  
  render() {
    return (
      <div>
         <div> className="questionText-container"
          <h2>Question {this.props.qID.split('')[1]} </h2> 
          <p> {this.props.questions[this.props.qIndex].qText} </p>
          </div>
      </div>    
    );
  }
}
function mapStateToProps ({ questions }) {
 return { questions };
 }



export default connect(mapStateToProps)(QuestionText);

