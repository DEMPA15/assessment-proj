import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class AddRemoveAll extends Component {

    render() {
        //Add all is visible
        if (this.props.add){
            return (
                <div className='AddRemoveAll' onClick={this.props.addAll}>
                    <AddMinusButton add={true} /><p>Add all assessments</p>
                </div>
            )
        }
        //Remove all is visible
        else if (!this.props.add) {
            return (
            <div className='AddRemoveAll' onClick={this.props.removeAll}>
                <AddMinusButton /><p>Remove all assessments</p>
            </div>
            )
        }
    }
}

export default connect(state => state)(AddRemoveAll);