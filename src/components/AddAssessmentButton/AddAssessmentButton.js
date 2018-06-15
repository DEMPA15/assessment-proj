import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class AddAssessmentButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            add: true
        }
    }

    render() {
        // Assessment links
        if (this.props.link) {
            return <div className='AddAssessmentButton' key={this.props.assessment.id} id={this.props.assessment.id}>
                <div className='assessment-button-top-link' onClick={this.props.removeAssessment} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <AddMinusButton title={this.props.assessment.name} id={this.props.assessment.id} />
                    <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                </div>
                <p title={this.props.assessment.name} id={this.props.assessment.id}>Description filler.</p>
                <a>{this.props.assessment.link}</a>
            </div>
        }
        //Assessment can be added
        else if (!this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
                <div className='AddAssessmentButton' onClick={this.props.addAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <div className='assessment-button-top' title={this.props.assessment.name} id={this.props.assessment.id}>
                        <AddMinusButton add={true} title={this.props.assessment.name} id={this.props.assessment.id} />
                        <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                    </div>
                    <p title={this.props.assessment.name} id={this.props.assessment.id}>Description filler.</p>
                </div>
            )
        }
        //Assessment can be removed
        else if (this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
                <div className='AddAssessmentButton' onClick={this.props.removeAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <div className='assessment-button-top-removable' title={this.props.assessment.name} id={this.props.assessment.id}>
                        <AddMinusButton title={this.props.assessment.name} id={this.props.assessment.id} />
                        <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                    </div>
                    <p title={this.props.assessment.name} id={this.props.assessment.id}>Description filler.</p>
                    <a>{this.props.assessment.link}</a>
                </div>
            )
        }
    }
}

export default connect(state => state)(AddAssessmentButton);