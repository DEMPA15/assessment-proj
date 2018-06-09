import React, { Component } from 'react';
import AceEditor from 'react-ace';

import * as Actions from '../../redux/action-creators'
import { connect } from 'react-redux';

import 'brace/mode/javascript';
import 'brace/theme/monokai'
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import { debug } from 'util';

class CodeEditor extends Component {
  
  
  onChange = (newValue) => {
    this.props.enterCode({[this.props.qID]:newValue})
  }
  postResults = (e) => {
    const QID = this.props.qID
    const ASSID = this.props.assessmentID;
    const history = this.props.history;
    if(document.getElementById('run').innerHTML==='Run'){
    this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)
    
    .then(response => {

      if(response.value[QID].passed === true){
        debugger
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
    })}
  }
 // gets qID and assessmentID from parent props

  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
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
        <button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button>
      </div>
    );
  }
}

export default connect(state => state, Actions)(CodeEditor);