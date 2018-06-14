import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setName, setEmail, postResults} from '../../redux/action-creators'

class ConfirmSubmit extends Component {
  constructor(){
    super()
    this.state = {
      allPassed: true,
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
  sendResults(){
    if(this.props.user.name && this.props.user.email){
      this.props.sendResults()
    }
    else{
      alert('Both your name and email are required')
    }
  }

  render() {
    const idToTitle = (qID)=>{
      return 'Question - ' + qID.split('').splice(1).join('')
    }
    const questions = Object.keys(this.props.results).map((question, i)=>{
      return <div key={i} className='question-result-box'>
                <div className={this.props.results[question].passed ? 'icon-passed' : 'icon-failed'} />  
                  <div className='section-subtitle'>{idToTitle(question)} </div> 
            </div>
    })
    return (
      <div className='popup-background' style={{visibility: this.props.visibility}}>
        <div className='popup-content'>
          <div className='section-title popup-title-container'>
            {
              this.state.allPassed ? 'All tests pass!'
              :
              'Not all tests have passed'
            }
            <div className='close-modal' onClick={()=>this.props.closePopup('hidden')} > X </div>
          </div>
          <div className='confirmSubmit-content'>
          <div className='confirmSubmit-results-container'>
            { questions }
          </div>
          <div className='infoToSubmit-container'>
          <span className='section-title confirmSubmit-subtitle'>Enter your info to submit your answers:</span>
          <div className='infoToSubmit'>
            <div>
              <input type='name' placeholder='NAME' onChange={(e)=>this.props.setName(e.target.value)} style={{borderColor:this.state.borderColor}}/>
              <input type='email'  placeholder='EMAIL' onChange={(e)=>this.props.setEmail(e.target.value)} style={{borderColor:this.state.borderColor}}/>
              <button className='submit-button-green confirmSubmit-button' onClick={()=>this.sendResults()}>
                {
                  this.state.allPassed ? 'Submit Answers'
                  :
                  'Submit Answers Anyway'
                } 
            </button>
            </div>
           
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ questions, results, code, user }) {
  return { questions, results, code, user };
  }

export default connect(mapStateToProps , {setName, setEmail, postResults} )(ConfirmSubmit); 