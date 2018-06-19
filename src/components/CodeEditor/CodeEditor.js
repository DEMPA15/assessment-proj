import React, { Component } from 'react';
import * as Actions from '../../redux/action-creators'
import { connect } from 'react-redux';
import brace from 'brace';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import { debug } from 'util';

import AceEditor from 'react-ace';
import SubmitButton from '../SubmitButton/SubmitButton'
import 'brace/theme/solarized_dark'
import 'brace/mode/javascript';

class CodeEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      lastQ: false,
      messageTxt:'',
      messageColor:'',
      loaded: true,
      
    }
  }

  showMessage = () => {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  onChange = (newValue) => {
    let tests = []
      this.props.results[this.props.qID].tests.forEach(test=>{
    tests.push({text: test.text, passed: null})})
    let changedResult = {
      [this.props.qID]:{
        attempted: true,
        passed: null,
        tests: tests
      }
    }
    if(this.props.results[this.props.qID].passed === true){
      this.props.changedAnswer(changedResult);
      this.setState({
        [this.props.qID]: newValue,
      })
    }else{
      this.setState({
        [this.props.qID]: newValue,
      })
    }
  }

  nextPage = (e) => {
    const history = this.props.history;
    const qIDArr = this.props.qID.split('')
    const newQnum = Number(qIDArr[1])+1;
    const newQ = `Q${newQnum}`
    this.setState({
      code:'',
    })
    history.push(`/wizard/${this.props.emailID}/${this.props.assessmentID}/${newQ}`);
  }

  attemptedQuestion(){
    let newObj = {...this.props.results[this.props.qID]}
    newObj.attempted = true
    this.props.attempted({ [this.props.qID]: newObj })
  }
  async postResults(e) {

    if (!this.state[this.props.qID] || this.state[this.props.qID] === ''){
      this.setState({
        loaded: true,
        messageColor:'red',
        messageTxt: `Come on! It's empty!`,
      },this.showMessage())
    }else{
      await this.props.enterCode({[this.props.qID]:this.state[this.props.qID]})

      this.setState({
        loaded:false,
      })
      this.attemptedQuestion()
      const QID = this.props.qID
      const length = this.props.questions.length;
      const num = Number(this.props.qID.split('')[1]);
      
      if (this.state[this.props.qID].search('function') === -1) {
        this.setState({
          loaded: true,
          messageColor: 'red',
          messageTxt: 'Please wrap your code in a function'
        }, this.showMessage())
      } else if (num===length) {
        this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)    
        .then(response => {
          
          if (response.value[QID].passed === true) {
            this.setState({
              loaded: true,
              lastQ:true,
              messageTxt:'Passed!',
              messageColor:'green',
            },this.showMessage())
          } else {
            this.setState({
              loaded: true,
              messageTxt:'Did not pass!',
              messageColor:'red'
            },this.showMessage())
          }
        })
        .catch(err => {
          this.setState({
            loaded: true,
            messageTxt:'Looks like you might have inputted invalid JS!',
            messageColor: 'red',
          },this.showMessage())
          console.log('something broke')
        })
      } else {
        this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)     
        .then(response => {
          if(response.value[QID].passed === true) {
            this.setState({
              loaded: true,
              messageTxt:'Passed!',
              messageColor:'green',
            },this.showMessage())
          } else {
            this.setState({
              loaded: true,
              messageTxt:'Did not pass!',
              messageColor:'red'
            },this.showMessage())
            
          }
        })
        .catch(err => {
          this.setState({
            loaded: true,
            messageTxt:'Looks like you might have inputted invalid JS!',
            messageColor: 'red',
          },this.showMessage())
          console.log('something broke')
        })
      }
    }
  }

  render() {
    const length = this.props.questions.length;
    const num = Number(this.props.qID.split('')[1]);
    let button = ''

    if (this.state.loaded === false){
      button = <div className = 'codeLoadingGif'><p className = 'warning'>If you did not wrap the code in a function, this could take a while.</p></div>
    } else if (this.state.lastQ){
      button = <div className = 'submitButtonContainer'><SubmitButton history ={this.props.history} buttonText = 'Submit'/></div>
    } else if (this.props.results[this.props.qID].passed === true && this.state[this.props.qID] == this.props.code[this.props.qID]){
      button = <div className = 'buttonContainer'><button id = 'next' className ='next' onClick={(e)=> {this.nextPage(e)}}>Next</button><button className = 're-run' onClick ={e=> {this.postResults(e)}}>Re-run</button></div>      
    } else {
      button = <div className = 'buttonContainer'><button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button></div>
    }

    return (
      <div className='codeEditor-container' id = 'codeEditor'>
        <AceEditor 
          style={{zIndex: 0, height: 'inherit', width: '100%' }}
          mode="javascript"
          theme="solarized_dark"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          wrapEnabled = {true}
          highlightActiveLine={true}
          value={this.state[this.props.qID]}
          focus={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}></AceEditor>

        {button}
        
        <div id="snackbar" style = {{backgroundColor: this.state.messageColor}}>{this.state.messageTxt}</div> 
      </div>
    );
  }
}

export default connect(state => state, Actions)(CodeEditor);