import React, { Component } from 'react';
import CodeArea from '../components/CodeArea'
import EnterEmail from '../components/EnterEmail'
import NavButtons from '../components/NavButtons'
import ProgressBar from '../components/ProgressBar'
import QuestionText from '../components/CodeArea'
import TestProgress from '../components/TestProgress'


class Wizard extends Component {
  render() {
    return (
      <div>
        <ProgressBar />
        <QuestionText />
        <TestProgress />
        <CodeArea />
        <NavButtons />
      </div>
    );
  }
}

export default Wizard;