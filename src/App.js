import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AssessmentList from './views/AssessmentList';
import Wizard from './views/Wizard';
import SplashPage from './views/SplashPage';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/assessments' component={AssessmentList}/>
          <Route path='/wizard/:assessmentID/:email' component={Wizard}/> 
        </Switch>
      </Router>
    );
  }
}

export default App;
