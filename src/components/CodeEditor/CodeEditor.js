import React, { Component } from 'react';
import axios from 'axios';
import brace from 'brace';
import 'brace/theme/solarized_dark'
import AceEditor from 'react-ace';
import SubmitButton from '../SubmitButton/SubmitButton'

import * as Actions from '../../redux/action-creators'
import { connect } from 'react-redux';

import 'brace/mode/javascript';
import 'brace/theme/monokai'
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import { debug } from 'util';

class CodeEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      lastQ: false,
    }
  }
  
  onChange = (newValue) => {
    this.props.enterCode({[this.props.qID]:newValue})
  }
  postResults = (e) => {
    const QID = this.props.qID
    const ASSID = this.props.assessmentID;
    const history = this.props.history;
    const keys = Object.keys(this.props.questions);
    const last = `Q${Number(keys.pop())+1}`;
    if(last===this.props.qID){
      this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)    
      .then(response => {
        if(response.value[QID].passed === true){
          this.setState({
            lastQ:true,
          })
        }else{
          console.log(`test didn't pass`);
        }
      })
      .catch( err => {
        console.log('something broke')
      })
    }else{
      this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)     
      .then(response => {
        if(response.value[QID].passed === true){
          const qIDArr = QID.split('')
          const newQnum = Number(qIDArr[1])+1;
          const newQ = `Q${newQnum}`
          history.push(`/wizard/1/${ASSID}/${newQ}`);
        }else{
          console.log(`test didn't pass`);
        }
      })
      .catch( err => {
        console.log('something broke')
      })
    }
  }
 // gets qID and assessmentID from parent props

  render() {
    let button = ''
    if(this.state.lastQ){
      button = <SubmitButton history ={this.props.history} buttonText = 'Submit' className = 'codeEditor-submit'/>
    }else{
      button = <button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button>
    }
    return (
      <div className='codeEditor-container'>
        <AceEditor
          style={{zIndex: 0, height: 'inherit', width: '98%' }}
          mode="javascript"
          theme="solarized_dark"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.props.code[this.props.qID]}
          focus={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        >
        </AceEditor>
        {button}
      </div>
    );
  }
}

export default connect(state => state, Actions)(CodeEditor);