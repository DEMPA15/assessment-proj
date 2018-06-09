import React, { Component } from 'react';
import axios from 'axios';
import './header.css'


class Header extends Component {
    constructor(){
        super()
        this.state = {
            assessmentName: ''
        }
    }

    componentDidMount(){
        // const assessmentID = this.props.match.params.assessmentID
        const tempAssessmentID = '5b18882560b192ae05d33dfd'
        axios.get(`/api/assessment-name/${tempAssessmentID}`)
            .then(name=>{
                let assessmentName = name.data.charAt(0).toUpperCase() + name.data.slice(1)
                this.setState({
                    assessmentName: assessmentName
                })
            })
    }

  render() {

    return (
      <div className='header-body'>
        <div className='header-logo'/>
        <div className='header-title'>{this.state.assessmentName} Assessment - {this.props.qID}</div>
      </div>
    );
  }
}

export default Header;