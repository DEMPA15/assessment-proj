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
    const QID = this.props.qID
    const keys = Object.keys(this.props.questions);
    const last = `Q${Number(keys.pop())+1}`;
    if(last===this.props.qID){
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
    const QID = this.props.qID
    const ASSID = this.props.assessmentID;
    const qIDArr = QID.split('')
    const newQnum = Number(qIDArr[1])+1;
    const newQ = `Q${newQnum}`
    history.push(`/wizard/1/${ASSID}/${newQ}`);
    document.getElementById('blah2').style.border = 'none'
    window.location.reload();
    const keys = Object.keys(this.props.questions);
    const last = `Q${Number(keys.pop())+1}`;
    if(last===this.props.qID){
      this.setState({
        last : true,
      })
    }
  }
  postResults = (e) => {
    const QID = this.props.qID
    const keys = Object.keys(this.props.questions);
    const last = `Q${Number(keys.pop())+1}`;
    if(last===this.props.qID){
      this.props.postResults(this.props.code[this.props.qID], this.props.assessmentID, this.props.qID)    
      .then(response => {
        if(response.value[QID].passed === true){
          this.setState({
            lastQ:true,
          })
          document.getElementById('blah2').style.border = '2px solid green'          

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
          document.getElementById('blah2').style.border = '2px solid green'          
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
    let button = ''
    if(this.state.lastQ){
      button = <SubmitButton history ={this.props.history} buttonText = 'Submit' className = 'codeEditor-submit'/>
    }else if(this.state.last){
      button = <div className = 'buttonContainer'><button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button><SubmitButton history ={this.props.history} buttonText = 'Submit' className = 'codeEditor-submit'/></div>
    }
    else if(this.props.results[this.props.qID].passed === true){
      button = <button id = 'next' className ='next' onClick={(e)=> {this.nextPage(e)}}>Next</button>      
    }
    else{
      button = <div className = 'buttonContainer'><button id = 'run' className ='run' onClick={(e)=> {this.postResults(e)}}>Run</button><button id = 'skip' className = 'skip' onClick={(e)=> {this.nextPage(e)}}>Skip</button></div>
    }
    return (
      <div className='codeEditor-container' id = 'codeEditor'>
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