import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class addAllAssessments extends Component {

    render() {
        if (this.props.allAssessments.length !== this.props.assessments.length){
            return (
                <div className='add-all-assessments' onClick={this.props.addAll}>
                    <AddMinusButton add={true} /><p>Add all assessments</p>
                </div>
            )
        }
        else return (
            <div className='add-all-assessments' onClick={this.addAllAssessments}>
                <p>All assessments added.</p>
            </div>
        )

    }
}

export default connect(state => state)(addAllAssessments);