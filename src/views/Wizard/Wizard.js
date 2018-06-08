import React, { Component } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import EnterEmail from '../../components/EnterEmail/EnterEmail'
import NavButtons from '../../components/NavButtons/NavButtons'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import QuestionText from '../../components/QuestionText/QuestionText'
import TestProgress from '../../components/TestResults/TestResults'

import { connect } from 'react-redux';
import { getQuestions, setResults } from '../../redux/action-creators'


class Wizard extends Component {

//I think we can have a loading key on local state and change it to true once our necessary data comes back
// - get questions and
// - set results
// we can run both of those actions on this page to set redux state

// also need to check state.user.email and if it is == to null then we need to display the enter email popup

componentDidMount(){
  const tempAssessmentID = '5b18882560b192ae05d33dfd'
  Promise.resolve(this.props.getQuestions(tempAssessmentID))
    .then(response=>{
      const results = []
      this.props.questions.map((question, i)=>{
        let tests = []
        question.tests.map(test=>{tests.push({text: test, passed: false})})
        results.push({ qID: question.qID, passed: false, tests: tests})})
      Promise.resolve(this.props.setResults(results))
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
function mapStateToProps ({ questions}) {
  return { questions };
  }

export default connect(mapStateToProps , { getQuestions, setResults })(Wizard); 