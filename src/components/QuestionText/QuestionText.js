import React, { Component } from 'react';
import { connect } from 'react-redux';
import './questionText.css' 

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

function mapStateToProps ({ questions }) {
  return { questions };
  }

export default connect(mapStateToProps , { })(QuestionText); 