import React, { Component } from 'react';
import CodeEditor from '../components/CodeEditor'
import EnterEmail from '../components/EnterEmail'
import NavButtons from '../components/NavButtons'
import ProgressBar from '../components/ProgressBar'
import QuestionText from '../components/QuestionText'
import TestProgress from '../components/TestProgress'


class Wizard extends Component {

//I think we can have a loading key on local state and change it to true once our necessary data comes back
// - get questions and
// - set results
// we can run both of those actions on this page to set redux state

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

export default Wizard;