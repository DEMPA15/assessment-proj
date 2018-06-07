import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AssessmentList from './views/AssessmentList';
import Wizard from './views/Wizard';
import SplashPage from './views/SplashPage';
import Submitted from './views/Submitted';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ SplashPage } />
          <Route path='/assessments' component={ AssessmentList }/>
          <Route path='/wizard/:email/:assessmentID/:questionNumber' component={ Wizard }/> 
          <Route path='/confirmation' component = { Submitted } />
        </Switch>
      </Router>
    );
  }
}

export default App;
