import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {
  constructor(){
    super()
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="confirmation">
        Confirmation
      </div>
    );
  }
}

function mapStateToProps ({ user }) {
  return { user };
  }

export default connect(mapStateToProps)(Confirmation);