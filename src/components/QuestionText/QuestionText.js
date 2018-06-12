import React, { Component } from 'react';
import { connect } from 'react-redux';
import './questionText.css' 


class QuestionText extends Component {

 // needs state.questions[this.props.qIndex].qText to render that text here

  render() {
    return (
      <div>
       <div>
           <span className='section-title'>Question {this.props.qIndex + 1} </span> 
           <div className='questionText-container'> {this.props.questions[this.props.qIndex].qText} </div>
         </div>
     </div>  
    );
  }
}

function mapStateToProps ({ questions }) {
  return { questions };
  }

export default connect(mapStateToProps , { })(QuestionText); 