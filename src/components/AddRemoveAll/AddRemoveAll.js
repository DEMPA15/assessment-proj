import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class addAllAssessments extends Component {

    render() {
        if (this.props.add && this.props.allAssessments.length !== this.props.assessments.length){
            return (
                <div className='add-remove-all' onClick={this.props.addAll}>
                    <AddMinusButton add={true} /><p>Add all assessments</p>
                </div>
            )
        }
        else if (!this.props.add && this.props.assessments.length !== 0) {
            return (
            <div className='add-remove-all' onClick={this.props.removeAll}>
                <AddMinusButton /><p>Remove all assessments</p>
            </div>
            )
        }
        else return (
            <div>
            </div>
        )
    }
}

export default connect(state => state)(addAllAssessments);