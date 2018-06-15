import React, { Component } from 'react';
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
      last:false,
    }
  }
  componentWillMount = () => {
    const length = this.props.questions.length;
    const num = this.props.qID.split('')[1];
    if(length === num){
      this.setState({
        last : true,
      })
    }
  }
  onChange = (newValue) => {
    this.props.enterCode({[this.props.qID]:newValue})
  }
  nextPage = (e) => {
    const history = this.props.history;
    const qIDArr = this.props.qID.split('')
    const newQnum = Number(qIDArr[1])+1;
    const newQ = `Q${newQnum}`
    history.push(`/wizard/1/${this.props.assessmentID}/${newQ}`);
  }
  postResults = (e) => {
    const QID = this.props.qID
    const length = this.props.questions.length;
    const num = Number(this.props.qID.split('')[1]);
    if(num===length){
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
         return 'worked'
        }else{
          this.setState({
            wrong:true,
          })
        }
      })
      .catch( err => {
        console.log('something broke')
      })
    }
  }

  render() {
    const length = this.props.questions.length;
    const num = Number(this.props.qID.split('')[1]);
    let button = ''
    if(this.state.lastQ){
      button = <SubmitButton history ={this.props.history} buttonText = 'Submit'/>
    }else if(this.props.results[this.props.qID].passed === true){
      button = <button id = 'next' className ='next' onClick={(e)=> {this.nextPage(e)}}>Next</button>      
    }else{
      button = <button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button>
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
        <div className = 'buttonContainer'>
        {button}
        </div>
      </div>
    );
  }
}

export default connect(state => state, Actions)(CodeEditor);