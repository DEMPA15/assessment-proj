import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from '../../assets/dm-Logo-blue.png';
import passed from '../../assets/passed.png';

class Confirmation extends Component {

  render() {
    return (
      <div className="confirmation">
      <img src={img} alt="code bar logo" className="confirmation-img"/>
      <div className="confirmation-text">
        <h2>Congratulations {this.props.user.name},</h2><p>your assessment results have been successfully submitted. You may now closer browser</p>
        </div>
      <img src={passed} alt="code bar logo" className="confirmation-passed-img"/>
      </div>
    );
  }
}

function mapStateToProps ({ user }) {
  return { user };
  }

export default connect(mapStateToProps)(Confirmation);