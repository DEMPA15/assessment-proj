import React, { Component } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './progressBar.css'

class ProgressBar extends Component {

  render() {
    const idToTitle = (qID)=>{
      return 'Question - ' + qID.split('').splice(1).join('')
    }
    const questions = Object.keys(this.props.results).map((question, i)=>{
      return <div key={i} className='question-result-box'>
                <div className={this.props.results[question].passed ? 'icon-passed' : 'icon-failed'} />
                <Link to={`/wizard/${this.props.emailID}/${this.props.assessmentID}/${question}`}>  
                  <div className='question-link section-subtitle'>{idToTitle(question)} </div> 
                </Link>
            </div>
    })
    return (
      <div className='progressBar-container'>
        <span className='section-title assessment-progress-title'>Assessment Progress</span>
        <div className='assessment-progress-container'>
          {questions}
        </div>
        <div className='assessment-progress-submit-button'>
          <SubmitButton  emailID={this.props.emailID} history={this.props.history} buttonText={'Submit Answers >>>'}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ results }) {
  return { results };
  }

export default connect(mapStateToProps , { })(ProgressBar); 