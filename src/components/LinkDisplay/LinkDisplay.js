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
    }
    
    this.generateLink = this.generateLink.bind(this);
    // this.slideOut = this.slideOut.bind(this);
  }

// displays link from assessment list

generateLink(){
  const encryptLink = this.props.assessments.map((element,i) => {
    return {
      name: element.name,
      link: `http://localhost:8001/wizard/${this.props.user.email}/${element.id}/Q1`
    }
  })
  this.props.link(encryptLink);
  this.setState({
    generated: true
  })
}
// slideOut(){
//   this.setState({
//     slide: true
//   })
// }

  render() {
    const list = this.props.assessments.map((assessment, i) => {
      return <div key={i} value={i}>
                {assessment.name}
                <AddMinusButton />
            </div>
    })
    var visibility = "hide";

    if (this.props.menuVisibility){
      visibility = "show"
    }
    return (
      <div id='flyoutMenu' onClick={ this.props.handleMouseDown } className={visibility}>
        <span>
        { list }
        </span>
        <button onClick={ this.generateLink }>Generate Links</button>
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