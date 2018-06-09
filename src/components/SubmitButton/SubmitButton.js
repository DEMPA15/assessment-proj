import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';



class SubmitButton extends Component {

  submitAnswers(){
    let formatedResults = {...this.props.results}
    formatedResults.instructorEmail = this.props.emailID
    formatedResults.studentName = this.props.user.name
    formatedResults.studentEmail = this.props.user.email
    Object.keys(this.props.code).forEach(question=>{
      formatedResults[question].code = this.props.code[question]
    })
    axios.post(`/api/submit`, formatedResults)
      .then(response=>{
        this.props.history.push('/confirmation')
      })
      .catch(error=>{
        console.log(error)
      })
  }

  render() {
    return (
      <button onClick={()=>this.submitAnswers()}> Submit Answers </button>
    );
  }
}

function mapStateToProps ({ results, code, user }) {
  return { results, code, user };
  }

export default connect(mapStateToProps , )(SubmitButton); 