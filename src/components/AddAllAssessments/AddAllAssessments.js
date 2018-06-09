import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';


class AddAssessmentButton extends Component {

    render() {
        return (
            <div></div>
        )
    }
}

export default connect(state => state)(AddAssessmentButton);