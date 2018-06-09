import React, { Component } from 'react';
import AceEditor from 'react-ace';

import * as Actions from '../../redux/action-creators'
import { connect } from 'react-redux';

import 'brace/mode/javascript';
import 'brace/theme/monokai'

class CodeEditor extends Component {
  
  onChange = (newValue) => {
    this.props.enterCode({[this.props.qID]:newValue})
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
        <button className ='run-button' onClick={()=>this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)}>Run</button>
      </div>
    );
  }
}

export default connect(state => state, Actions)(CodeEditor);