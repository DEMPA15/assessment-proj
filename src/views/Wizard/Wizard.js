import React, { Component } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import QuestionText from '../../components/QuestionText/QuestionText'
import TestProgress from '../../components/TestProgress/TestProgress'
import LoadingGif from '../../components/LoadingGif/LoadingGif'
import Header from '../../components/Header/Header'
import './wizard.css'

import { connect } from 'react-redux';
import { getQuestions, setResults } from '../../redux/action-creators'


class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

componentDidMount(){
  // const assessmentID = this.props.match.params.assessmentID
  const tempAssessmentID = '5b18882560b192ae05d33dfd'
  Promise.resolve(this.props.getQuestions(tempAssessmentID))
    .then(response=>{
      const results = []
      this.props.questions.forEach((question, i)=>{
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
    return (
      <div>
        {
          this.state.loading ?
          <LoadingGif />
          :
          <div className='wizard-body'>
            <Header qID={this.props.match.params.qID}/>
            <div className='dashboard'>
              <div className='questions-results-container'>
                <QuestionText qID={this.props.match.params.qID}/>
                <TestProgress qID={this.props.match.params.qID}/>
              </div>
              <CodeEditor qID={this.props.match.params.qID} assessmentID={this.props.match.params.assessmentID}/>
              <ProgressBar  qID={this.props.match.params.qID} history={this.props.history}/>
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

export default connect(mapStateToProps , { getQuestions, setResults })(Wizard); 