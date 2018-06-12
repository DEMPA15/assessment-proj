import React, { Component } from 'react';
import './QuestionText.css';


class QuestionText extends Component {

 // needs state.questions[this.props.qIndex].qText to render that text here

  render() {
    return (
      <div>
        <h2 className = 'questionNumber'>Question {}</h2>
        <p className = 'questionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default QuestionText;