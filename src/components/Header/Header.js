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
        const assessmentID = this.props.assessmentID
        axios.get(`/api/assessment-name/${assessmentID}`)
            .then(name=>{
                let assessmentName = name.data.charAt(0).toUpperCase() + name.data.slice(1)
                this.setState({
                    assessmentName: assessmentName
                })
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

export default Header;