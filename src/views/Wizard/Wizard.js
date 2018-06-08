import React, { Component } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import EnterEmail from '../../components/EnterEmail/EnterEmail'
import NavButtons from '../../components/NavButtons/NavButtons'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import QuestionText from '../../components/QuestionText/QuestionText'
import TestProgress from '../../components/TestProgress/TestProgress'

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
  const assessmentID = this.props.match.params.assessmentID
  const tempAssessmentID = '5b18882560b192ae05d33dfd'
  Promise.resolve(this.props.getQuestions(tempAssessmentID))
    .then(response=>{
      const results = []
      this.props.questions.map((question, i)=>{
        let tests = []
        question.tests.map(test=>{tests.push({text: test, passed: false})})
        results.push({ qID: question.qID, passed: false, tests: tests})})
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
        <ProgressBar />
        <QuestionText />
        <TestProgress />
        <CodeEditor />
        <NavButtons />
      </div>
    );
  }
}
function mapStateToProps ({ questions }) {
  return { questions };
  }

export default connect(mapStateToProps , { getQuestions, setResults })(Wizard); 