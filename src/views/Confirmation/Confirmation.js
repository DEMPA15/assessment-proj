import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from '../../assets/dm-Logo-blue.png';
import passed from '../../assets/passed.png';
import * as Actions from '../../redux/action-creators'

class Confirmation extends Component {

  componentWillMount(){
    this.props.clearData();
  }

  render() {
    const upperCaseName = this.props.user.name.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    return (
      <div className="confirmation">
      <img src={img} alt="code bar logo" className="confirmation-img"/>
      <div className="confirmation-text">
        <h2>Congratulations {upperCaseName},</h2><p>Your assessment results have been successfully submitted, you may now close your browser.</p>
        </div>
      <img src={passed} alt="code bar logo" className="confirmation-passed-img"/>
      </div>
    );
  }
}

function mapStateToProps ({ user }) {
  return { user };
  }

export default connect(mapStateToProps, Actions)(Confirmation);