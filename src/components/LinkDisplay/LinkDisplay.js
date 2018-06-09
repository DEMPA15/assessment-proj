import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action-creators';
import AddMinusButton from '../AddMinusButton/AddMinusButton';


class LinkDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      generated: false,
      slide: false,
    }
    
    this.generateLink = this.generateLink.bind(this);
    this.slideOut = this.slideOut.bind(this);
  }

// displays link from assessment list

generateLink(){
  const encryptLink = this.props.assessments.map((element,i) => {
    return {
      name: element.name,
      link: `http://localhost:3010/wizard/${this.props.user.email}/${element.id}/1`
    }
  })
  this.props.link(encryptLink);
  this.setState({
    generated: true
  })
}
slideOut(){
  this.setState({
    slide: true
  })
}

  render() {
    const list = this.props.assessments.map((assessment, i) => {
      return <div key={i} >
                {assessment.name}
                <AddMinusButton />
            </div>
    })
    return (
      <div onClick= {this.slideOut}>
        <span>
        { list }
        </span>
        { this.state.slide === true && 
        <button onClick={ this.generateLink }>Generate Links</button>
      }
      { this.state.generated === true &&
      this.props.links.map((testLink, i) => {
        return <div key={i}>
          {testLink.name} {testLink.link}
              </div>
      })

      }
      </div>
        
      
    );
  }
}



export default connect(state => state, Actions)(LinkDisplay);