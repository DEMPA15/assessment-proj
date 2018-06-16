import React, { Component } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ProgressBar extends Component {

  render() {
    const idToTitle = (qID)=>{
      return 'Question - ' + qID.split('').splice(1).join('')
    }
    const questions = Object.keys(this.props.results).map((question, i)=>{
      let opacity = this.props.results[question].passed === null ? 0 : 1;
      return <div key={i} className='question-result-box'>
                <div className={ this.props.results[question].passed ? 'icon-passed' : 'icon-failed'} style={this.props.results[question].attempted ? {opacity:opacity}:{opacity:0}}/>
                <Link to={`/wizard/${this.props.emailID}/${this.props.assessmentID}/${question}`}>  
                  <div className='question-link section-subtitle' style={question === this.props.qID ? {color: '#328cc1'}: {color:'#e3e3e3'}}>{idToTitle(question)} </div> 
                </Link>
            </div>
    })
    return (
      <div>
        <span className='section-title assessment-progress-title'>Progress</span>
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