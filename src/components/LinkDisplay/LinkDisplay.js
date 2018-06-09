import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { link } from '../../redux/action-creators';


class LinkDisplay extends Component {
  constructor(props){
    super(props);
    
    this.generateLink = this.generateLink.bind(this);
  }

// displays link from assessment list

generateLink(){
  const encryptLink = this.props.assessments.map((element,i) => {
    return {[element.name]: `http://localhost:3010/wizard/${this.props.user.email}/${element.id}/1`}
  })
  this.props.link(encryptLink);
}

  render() {
    const links = this.props.assessments.map((assessment, i) => {
      return <div key={i} >
                {assessment.name}<button>-</button>
            </div>
    })
    return (
      <div>
        { links }
        <button onClick={ this.generateLink }>Generate Links</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ link }, dispatch)
}

export default connect(state => state, mapDispatchToProps)(LinkDisplay);