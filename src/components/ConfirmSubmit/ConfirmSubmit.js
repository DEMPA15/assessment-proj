import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setName, setEmail} from '../../redux/action-creators'
import './confirmSubmit.css'

class ConfirmSubmit extends Component {
  constructor(){
    super()
    this.state = {
      allPassed: true
    }
  }

  componentDidMount(){
    Object.keys(this.props.results).forEach(question=>{
      if(!this.props.results[question].passed){
        this.setState({
          allPassed: false
        })
      }
    })
  }

  render() {
    const idToTitle = (qID)=>{
      return 'Question - ' + qID.split('').splice(1).join('')
    }
    const questions = Object.keys(this.props.results).map((question, i)=>{
      return <div key={i}>
                <div className={this.props.results[question].passed ? 'icon-passed' : 'icon-failed'} />
                  <div className='question-link'>{idToTitle(question)} </div> 
            </div>
    })
    return (
      <div className='popup-background' style={{visibility: this.props.visibility}}>
        <div className='popup-content'>
          <div className='confirm-title'>
            {
              this.state.allPassed ? 'All tests pass!'
              :
              'All tests have not passed.'
            }
          </div>
          <div className='confirmSubmit-results-container'>
            { questions }
          </div>
          <div className='infoToSubmit-container'>
            Enter your info to submit your answers:
            {/* <label>Name</label> */}
            <input placeholder='Enter Name' onChange={(e)=>this.props.setName(e.target.value)}/>
            {/* <label> Email </label> */}
            <input  placeholder='Enter Email' onChange={(e)=>this.props.setEmail(e.target.value)}/>
          </div>
          <div className='button-container'>
            <button className='cancel-button-red confirmSubmit-button' onClick={()=>this.props.closePopup('hidden')}> Cancel </button>
            <button className='submit-button-green confirmSubmit-button' onClick={this.props.sendResults()}>
                {
                  this.state.allPassed ? 'Submit Answers'
                  :
                  'Submit Answers Anyway'
                } 
            </button>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps ({ questions, results, code, user }) {
  return { questions, results, code, user };
  }

export default connect(mapStateToProps , {setName, setEmail} )(ConfirmSubmit); 