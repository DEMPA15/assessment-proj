import React, { Component } from 'react';
import { connect } from 'react-redux';
import './questionText.css'


 class QuestionText extends Component {
  
  render() {
    return (
         <div className="questionText-container"> 
          <div className='section-title'>Question {this.props.qID.split('')[1]} </div> 
          <p> {this.props.questions[this.props.qIndex].qText} </p>
        </div>
    );
  }
}
function mapStateToProps ({ questions }) {
 return { questions };
 }



export default connect(mapStateToProps)(QuestionText);

