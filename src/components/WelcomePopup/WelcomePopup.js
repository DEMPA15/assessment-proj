import React, { Component } from 'react';
import { connect } from 'react-redux';

class WelcomePopup extends Component {
    constructor() {
        super()
        this.state = {
            allPassed: true,
            nameBorderColor: 'grey',
            emailBorderColor: 'grey',
            clicked: false
        }
    }

    closePopup() {
        this.setState({
            allPassed: true,
            nameBorderColor: 'grey',
            emailBorderColor: 'grey'
        })
        this.props.closePopup('hidden')
    }

    render() {
        const idToTitle = (qID) => {
            return 'Question - ' + qID.split('').splice(1).join('')
        }
        return (
            <div className='popup-background' style={{ visibility: this.props.visibility }}>
                <div className='popup-content'>
                    <div className='section-title popup-title-container'>
                        Welcome to { this.props.wizardAssessment }!
                        <div className='close-modal' onClick={() => this.closePopup()} > X </div>
                    </div>
                    <div className='WelcomePopup-content'>
                        <p>
                            The following assessment will test your understanding of Javascript. As you take the test, be sure to follow these two guidelines.
                        </p>
                        <ol>
                            <li>
                                <b>Don’t refresh or close the browser!</b> If you do, you’ll lose all your code. If you do need to stop the test for any reason, save your code on your local machine so you can access it later.
                            </li><br />
                            <li>
                                <b>Wrap your code in a function!</b> Otherwise, the system will be unable to read your code and may crash.
                            </li>
                        </ol>
                        <p>Good luck!</p>
                        <div className='ready-button-div'>
                            <button className='submit-button-green ready-button' onClick={() => this.closePopup()}>I'm Ready!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(WelcomePopup); 