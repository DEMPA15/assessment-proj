import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class AddAssessmentButton extends Component {

    render() {
        if (!this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id) ) {
            return <div className='assessment-button' onClick={this.props.addAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}> <AddMinusButton add={true} title={this.props.assessment.name} id={this.props.assessment.id} /><p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name}</p><br/></div>
          }
          else if (this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id) ) {
            return <div className='assessment-button' key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}> <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name}</p><br/></div>
          }
          else return (
              <div><p>This isn't supposed to happen.</p></div>
          )
    }
}

export default connect(state => state)(AddAssessmentButton);