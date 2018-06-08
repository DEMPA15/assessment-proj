import React, { Component } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import EnterEmail from '../../components/EnterEmail/EnterEmail'
import NavButtons from '../../components/NavButtons/NavButtons'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import QuestionText from '../../components/QuestionText/QuestionText'
import TestProgress from '../../components/TestProgress/TestProgress'

import { connect } from 'react-redux';
import { getQuestions } from '../../redux/action-creators'


class Wizard extends Component {

//I think we can have a loading key on local state and change it to true once our necessary data comes back
// - get questions and
// - set results
// we can run both of those actions on this page to set redux state

// also need to check state.user.email and if it is == to null then we need to display the enter email popup

componentDidMount(){
  const tempAssessmentID = '5b18882560b192ae05d33dfd'
  this.props.getQuestions(tempAssessmentID)
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
function mapStateToProps ({}) {
  return {};
  }

export default connect(mapStateToProps , { getQuestions })(Wizard); 