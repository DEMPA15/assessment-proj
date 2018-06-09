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
      return <div key={i}>
                <div className={this.props.results[question].passed ? 'icon-passed' : 'icon-failed'} />
                <Link to={`/wizard/${this.props.emailID}/${this.props.assessmentID}/${question}`}>  
                  <div className='question-link'>{idToTitle(question)} </div> 
                </Link>
            </div>
    })
    return (
      <div>
        <span className='title'>Assessment Progress</span>
        {questions}
        <SubmitButton emailID={this.props.emailID} history={this.props.history}/>
      </div>
    );
  }
}

function mapStateToProps ({ results }) {
  return { results };
  }

export default connect(mapStateToProps , { })(ProgressBar); 