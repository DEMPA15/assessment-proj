import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { link } from '../../redux/action-creators';
import { CopyToClipboard } from 'react-copy-to-clipboard';


class LinkDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      generated: false,
      link: '',
      copied: false
    }
    
    this.generateLink = this.generateLink.bind(this);
  }

// displays link from assessment list

generateLink(){
  const encryptLink = this.props.assessments.map((element,i) => {
    return {[element.name]: `http://localhost:3010/wizard/${this.props.user.email}/${element.id}/1`}
  })
  this.props.link(encryptLink);
  this.setState({
    generated: true
  })
}

onChange = ({target: {link}}) => {
  this.setState({link, copied: false});
};

onCopy = () => {
  this.setState({copied: true});
};

  render() {
    const list = this.props.assessments.map((assessment, i) => {
      return <div key={i} >
                {assessment.name}<button>-</button>
            </div>
    })
    if (this.state.generated === true){
      const links = this.props.link.map((link,i) => {
        return <div key={i}>
                  {link}
              </div>
      })
    
    }
    return (
      <div>
        { list }
        <button onClick={ this.generateLink }>Generate Links</button>
        <textarea onChange={this.onChange} value={this.link} />
        <CopyToClipboard onCopy={this.onCopy} text={this.link}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
        
      
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ link }, dispatch)
}

export default connect(state => state, mapDispatchToProps)(LinkDisplay);