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
        const asslinks = this.props.assessments.map((testLink, i) => {
            return <div key={i}>
            <a href={`${testLink.link}`}> { testLink.link }</a>
            
            </div>
        })
        if (!this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
            <div className='assessment-button' onClick={this.props.addAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                <div className='assessment-button-top'  title={this.props.assessment.name} id={this.props.assessment.id}>
                    <AddMinusButton add={true}  title={this.props.assessment.name} id={this.props.assessment.id} />
                    <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                </div>
                <p  title={this.props.assessment.name} id={this.props.assessment.id}>Description filler.</p>
            </div>
            )
        }
        else if (this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
            <div className='assessment-button' onClick={this.props.removeAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                <div className='assessment-button-top' title={this.props.assessment.name} id={this.props.assessment.id}>
                    <AddMinusButton title={this.props.assessment.name} id={this.props.assessment.id} />
                    <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                </div>
                <p title={this.props.assessment.name} id={this.props.assessment.id}>Description filler.</p>
                <a>{this.props.assessment.link}</a>
            </div>
            )
        }
        else return (
            <div><p>This isn't supposed to happen.</p></div>
        )
    }
}

export default connect(state => state)(AddAssessmentButton);