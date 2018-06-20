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
            <div className='popup-background' id='WelcomePopup-background'  style={{ visibility: this.props.visibility }}>
                <div className='WelcomePopup'>
                    <div className='section-title popup-title-container'>
                        Welcome to the { this.props.wizardAssessment } Assessment!
                        <div className='close-modal' onClick={() => this.closePopup()} > X </div>
                    </div>
                    <div className='WelcomePopup-content'>
                        <p>
                            The following assessment will test your understanding of Javascript. As you take the test, be sure to follow these two guidelines.
                        </p>
                        <ol>
                            <li>
                                <span className='bolded-text'>Don’t refresh or close the browser!</span> If you do, you’ll lose all your code. If you do need to stop the test for any reason, save your code on your local machine so you can access it later.
                            </li><br />
                            <li>
                                <span className='bolded-text' >Wrap your code in a function!</span> Otherwise, the system will be unable to read your code and may crash.
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