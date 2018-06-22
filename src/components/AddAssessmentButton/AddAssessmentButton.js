import React, { Component } from 'react';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import { connect } from 'react-redux';
import ClipboardJS from 'clipboard';
import clipboard from '../../assets/clipboard.png'

class AddAssessmentButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            add: true
        }
        this.copied = this.copied.bind(this);

        const clipboard = new ClipboardJS('.btn');

        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger', e.trigger);

            e.clearSelection();
        });
        clipboard.on('error', function (e) {
            console.error('Action', e.action);
            console.error('Trigger', e.trigger);
        })
    }
    copied() {
        var x = document.getElementById("snackbar-copied");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
    }
    render() {
        // Assessment links
        if (this.props.link) {
            return <div className='AddAssessmentButton-link' key={this.props.assessment.id} id={this.props.assessment.id}>
                <div className='assessment-button-top-link' onClick={this.props.removeAssessment} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <p className='title-link' title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                    <AddMinusButton title={this.props.assessment.name} id={this.props.assessment.id} />
                </div>
                <div className='assessment-link-container'>
                    <button className='btn' data-clipboard-target="#assessment-link-input" onClick={this.copied}><img className="clipboard-button" src={clipboard} /></button>
                    <input id='assessment-link-input' readOnly="readOnly" value={this.props.assessments.link} />
                    <div id="snackbar-copied">Copied!</div>
                </div>
            </div>
        }
        //Assessment can be added
        else if (!this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
                <div className='AddAssessmentButton' onClick={this.props.addAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <div className='assessment-button-top' title={this.props.assessment.name} id={this.props.assessment.id}>
                        <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                        <AddMinusButton add={true} title={this.props.assessment.name} id={this.props.assessment.id} />
                    </div>
                </div>
            )
        }
        //Assessment can be removed
        else if (this.props.assessments.find(propsAssessment => propsAssessment.id === this.props.assessment.id)) {
            return (
                <div className='AddAssessmentButton-removable' onClick={this.props.removeAssessment} key={this.props.assessment.id} title={this.props.assessment.name} id={this.props.assessment.id}>
                    <div className='assessment-button-top' title={this.props.assessment.name} id={this.props.assessment.id}>
                        <p title={this.props.assessment.name} id={this.props.assessment.id}> {this.props.assessment.name.toUpperCase()}</p>
                        <AddMinusButton title={this.props.assessment.name} id={this.props.assessment.id} blue={true} />
                    </div>
                </div>
            )
        }
    }
}

export default connect(state => state)(AddAssessmentButton);