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
        const clipboard = new ClipboardJS('.btn');
        
        clipboard.on('success', function(e){
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger', e.trigger);
        
            e.clearSelection();
        });
        clipboard.on('error', function(e){
            console.error('Action', e.action);
            console.error('Trigger', e.trigger);
        })
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
                <button className='btn' data-clipboard-target="#assessment-link-input"><img className="clipboard-button" src={clipboard}/></button>
                <input id='assessment-link-input' readOnly="readOnly" value={this.props.assessment.link}/>
                </div>
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