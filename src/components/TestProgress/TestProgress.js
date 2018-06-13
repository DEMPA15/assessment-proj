import React, { Component } from 'react';
import { connect } from 'react-redux';


class TestProgress extends Component {

 //needs state.results[this.props.qID].tests to map through each test and 
 //render the appropriate image depending on its passed boolean

 //needs state.results[this.props.qID].tests to map through each and render the text

 //be careful to make sure test-text matches the correct test-boolean

  render() {
    const indexToTitle = (testIndex)=>{
      return 'Test - ' + (testIndex + 1)
    }
    const tests = this.props.results[this.props.qID].tests.map((test, i)=>{
      return <div key={i} className='test-results-box'>
                <div className='test-results-title section-subtitle'>
                  <div className={test.passed ? 'icon-passed' : 'icon-failed'} />
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