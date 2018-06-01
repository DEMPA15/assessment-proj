import React, { Component } from 'react';
import CodeEditor from '../components/CodeEditor'
import EnterEmail from '../components/EnterEmail'
import NavButtons from '../components/NavButtons'
import ProgressBar from '../components/ProgressBar'
import QuestionText from '../components/QuestionText'
import TestProgress from '../components/TestProgress'


class Wizard extends Component {
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