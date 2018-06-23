import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setWizardAssessment } from '../../redux/action-creators';
import { bindActionCreators } from 'redux';


class Header extends Component {
    constructor(){
        super()
        this.state = {
            assessmentName: ''
        }
    }

    componentDidMount(){
        const assessmentID = this.props.assessmentID
        axios.get(`/api/assessment-name/${assessmentID}`)
            .then(name=>{
                let assessmentName = name.data.charAt(0).toUpperCase() + name.data.slice(1)
                this.setState({
                    assessmentName: assessmentName
                })
                this.props.setWizardAssessment(assessmentName);
            })
    }

  render() {

    return (
        <div>
      <div className='header-body'>
        <div className='header-logo'/>
        <div className='header-title'>{this.state.assessmentName} Assessment - {this.props.qID}</div>
      </div>
      <span className="sexy_line"></span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setWizardAssessment}, dispatch);
  }

export default connect (state => state, mapDispatchToProps)(Header);