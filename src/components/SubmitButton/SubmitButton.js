import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import ConfirmSubmit from '../ConfirmSubmit/ConfirmSubmit';

class SubmitButton extends Component {
  constructor(){
    super()
    this.state = {
      confirmSubmitPopup: 'hidden'
    }

    this.sendResults = this.sendResults.bind(this)
    this.editConfirmSubmitVisibility = this.editConfirmSubmitVisibility.bind(this)
  }

  editConfirmSubmitVisibility(value){
    this.setState({
      confirmSubmitPopup: value
    })
  }

  sendResults(){
    let resultsToSend = this.formatResults(this.props.results)
    axios.post(`/api/submit`, resultsToSend)
      .then(response=>{
        console.log(' results sent')
        this.props.history.push('/confirmation')
      })
      .catch(error=>{
        console.log(error)
      })
  }

  formatResults(results){
    let formatedResults = {...results}
    formatedResults.instructorEmail = this.props.emailID
    formatedResults.studentName = this.props.user.name
    formatedResults.studentEmail = this.props.user.email
    Object.keys(this.props.code).forEach(question=>{
      formatedResults[question].code = this.props.code[question]
      formatedResults[question].qText = this.props.questions[this.props.qIndex].qText
    })
    return formatedResults
  }

  render() {
    return (
      <div style = {{width:'inherit'}}>
        <button className='submit-button-green' onClick={()=>this.editConfirmSubmitVisibility('visible')}> {this.props.buttonText} </button>
        <div className='popup'>
          <ConfirmSubmit visibility={this.state.confirmSubmitPopup} sendResults={this.sendResults} closePopup={(value)=>this.editConfirmSubmitVisibility(value)} />
        </div>

      </div>
    );
  }
}

function mapStateToProps ({ questions, results, code, user }) {
  return { questions, results, code, user };
  }

export default connect(mapStateToProps , )(SubmitButton); 