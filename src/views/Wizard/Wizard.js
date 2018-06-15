import React, { Component } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import QuestionText from '../../components/QuestionText/QuestionText'
import TestProgress from '../../components/TestProgress/TestProgress'
import LoadingGif from '../../components/LoadingGif/LoadingGif'
import Header from '../../components/Header/Header'

import { connect } from 'react-redux';
import { getQuestions, setResults, setCode } from '../../redux/action-creators'


class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

componentDidMount(){
  const assessmentID = this.props.match.params.assessmentID
  Promise.resolve(this.props.getQuestions(assessmentID))
    .then(response=>{
      const results = []
      this.props.questions.forEach((question, i)=>{
        this.props.setCode({[question.qID]: ''})
        let tests = []
        question.tests.forEach(test=>{tests.push({text: test, passed: false})})
        results[question.qID] = { passed: false, tests: tests}
      })
      Promise.resolve(this.props.setResults(results))
        .then(response=>{
          this.setState({
            loading: false
          })
        })
    })
    .catch(error=>{
      console.log(error)
    })
}

  render() {
    const qID = this.props.match.params.qID;
    const assessmentID = this.props.match.params.assessmentID;
    const emailID = this.props.match.params.email;
    let qIndex;
      this.props.questions.forEach((question, i)=>{
        if(question.qID === qID){
          qIndex = i
        }
      })
    return (
      <div className="Wizard">
        {
          this.state.loading ?
          <LoadingGif />
          :
          <div className='wizard-body'>
            <Header qID={qID} assessmentID={assessmentID}/>
            <div className='dashboard'>
              <div className='questions-results-container'>
               <div className='component-wrapper'>
                <QuestionText qIndex={qIndex} qID={qID} />
                </div>
                <div className='component-wrapper' style={{marginTop: '15px'}}>
                <TestProgress qID={qID}/>
                </div>
              </div>
              <div className='editor-container'>
                <CodeEditor qID={qID} assessmentID={assessmentID} history={this.props.history}/>
              </div>
              <div className='progressBar-container  component-wrapper'>
                <ProgressBar  qID={qID} assessmentID={assessmentID} emailID={emailID} history={this.props.history}/>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
function mapStateToProps ({ questions }) {
  return { questions };
  }

export default connect(mapStateToProps , { getQuestions, setResults, setCode })(Wizard);