import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { link } from '../../redux/action-creators';


class LinkDisplay extends Component {

// displays link from assessment list

generateLink(e){
  const encryptLink = ({
    [e.target.name]: `http://localhost:3010/wizard/${this.props.user.email}/${e.target.value}/1`
  })
  this.props.link(encryptLink);
}

  render() {
    return (
      <div>
        LinkDisplay
        <button>Generate Links</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ link }, dispatch)
}

export default connect(state => state, mapDispatchToProps)(LinkDisplay);