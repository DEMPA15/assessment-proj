import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class AddRemoveAll extends Component {

    render() {
        //Add all is visible and useful
        if (this.props.add && this.props.allAssessments.length !== this.props.assessments.length){
            return (
                <div className='AddRemoveAll' onClick={this.props.addAll}>
                    <AddMinusButton add={true} /><p>Add all assessments</p>
                </div>
            )
        }
        //Remove all is visible and useful
        else if (!this.props.add && this.props.assessments.length !== 0) {
            return (
            <div className='AddRemoveAll' onClick={this.props.removeAll}>
                <AddMinusButton /><p>Remove all assessments</p>
            </div>
            )
        }
        //Add all is invisible and useless
        else if (this.props.add && this.props.allAssessments.length === this.props.assessments.length) {
            return (
                <div className='AddRemoveAll-invisible' >
                <AddMinusButton add={true} /><p>Add all assessments</p>
            </div>
            )
        }
        else if (!this.props.add && this.props.assessments.length === 0) {
            return (
                <div className='AddRemoveAll-invisible' >
                <AddMinusButton /><p>Remove all assessments</p>
            </div>
            )
        }
    }
}

export default connect(state => state)(AddRemoveAll);