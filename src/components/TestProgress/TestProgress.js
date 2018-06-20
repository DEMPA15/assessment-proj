import React, { Component } from 'react';
import { connect } from 'react-redux';


class TestProgress extends Component {
  render() {
    const indexToTitle = (testIndex)=>{
      return 'Test - ' + (testIndex + 1)
    }
    const tests = this.props.results[this.props.qID].tests.map((test, i)=>{
      let opacity = test.passed === null ? 0 : 1;
      return <div key={i} className='test-results-box'>
                <div className='test-results-title section-subtitle'>
                  <div className={test.passed ? 'icon-passed' : 'icon-failed'} style={this.props.results[this.props.qID].attempted ? {opacity:opacity}:{opacity:0}}/>
                  <div>{indexToTitle(i)} </div> 
                </div> 
                <div className='test-results-text'>{test.text} </div>
            </div>
    })
    return (
      <div className='test-results-container'>
        <span className='section-title'>Test Results</span>
        {tests}
      </div>
    );
  }
}

function mapStateToProps ({ results }) {
  return { results };
  }

export default connect(mapStateToProps , { })(TestProgress); 