import React, { Component } from 'react';
import './QuestionText.css';
import { connect } from 'react-redux';

 class QuestionText extends Component {
  
  render() {
    return (
      <div className = 'questionContainer'>
        <h2 className = 'questionNumber'>Question {this.props.qID.split('')[1]}</h2>
        <p className = 'questionText'>{this.props.questions[this.props.qIndex].qText}
        </p>
      </div>
    );
  }
}

export default connect(state => state)(QuestionText);