import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';


 class QuestionText extends Component {
  
  
  render() {
    var questArr = this.props.questions[this.props.qIndex].qText.split('***');
    var questText = questArr[0];
    var questCode = questArr[1];
    // let size = document.getElementsByClassName('ace_gutter-cell').style.height;
    let component = ''
    if(questCode ===''|| questCode === undefined){
      component = <div/>
    } else {
      component = 
      <div className="editor" style = {{height: 'auto'}}>
        <AceEditor
            style={{zIndex: 0, width: '96%', margin: '8px' }}
            height={'20vh'}
            mode="javascript"
            theme="solarized_dark"
            name="blah"
            onLoad={this.onLoad}
            fontSize={14}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            value={questCode}
            focus={false}
            readOnly={true}
            wrapEnabled={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}>
          </AceEditor>
        </div>
    }

    return (
      <div className="questionText-container"> 
          <div className='section-title'>Question {this.props.qID.split('')[1]} </div> 
            <p> {questText} </p>
            { component }
      </div>  
    );
  }
}
function mapStateToProps ({ questions }) {
 return { questions };
 }



export default connect(mapStateToProps)(QuestionText);

