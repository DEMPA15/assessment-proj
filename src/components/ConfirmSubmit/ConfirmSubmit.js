import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setName, setEmail, postResults} from '../../redux/action-creators'

class ConfirmSubmit extends Component {
  constructor(){
    super()
    this.state = {
      allPassed: true,
      nameBorderColor: 'grey',
      emailBorderColor: 'grey',
      clicked: false
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
      this.setState({
        clicked:true
      })
      this.props.sendResults()
    }
    else{
      if(!this.props.user.name){
          this.setState({
            nameBorderColor: 'red'
          })
      }
      if(!this.props.user.email){
        this.setState({
          emailBorderColor: 'red'
        })
      }
    }
  }
  enterValue(e){
    if(e.target.name === 'name'){
      this.setState({
        nameBorderColor: 'grey'
      })
      this.props.setName(e.target.value)
    }
    if(e.target.name === 'email'){
      this.setState({
        emailBorderColor: 'grey'
      })
      this.props.setEmail(e.target.value)
    }
  }
  closePopup(){
    this.setState({
      allPassed: true,
      nameBorderColor: 'grey',
      emailBorderColor: 'grey'
    })
    this.props.closePopup('hidden')
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
            <div className='close-modal' onClick={()=>this.closePopup()} > X </div>
          </div>
          <div className='confirmSubmit-content'>
          <div className='confirmSubmit-results-container'>
            { questions }
          </div>
          <div className='infoToSubmit-container'>
          <span className='section-title confirmSubmit-subtitle'>Enter your info to submit your answers:</span>
          <div className='infoToSubmit'>
            <div>
              <input required type='name' name='name' placeholder='NAME' onChange={(e)=>this.enterValue(e)} style={{borderBottom:`1px solid ${this.state.nameBorderColor}`}}/>
              <input required type='email' name='email'  placeholder='EMAIL' onChange={(e)=>this.enterValue(e)} style={{borderBottom:`1px solid ${this.state.emailBorderColor}`}}/>
              <button className='submit-button-green confirmSubmit-button' onClick={()=>this.sendResults()}>
                {
                  this.state.clicked ? '... sending'
                  :
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