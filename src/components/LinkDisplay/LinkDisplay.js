import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action-creators';
import AddMinusButton from '../AddMinusButton/AddMinusButton';
import AddAssessmentButton from '../AddAssessmentButton/AddAssessmentButton';


class LinkDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      generated: false,
    }
    
    this.generateLink = this.generateLink.bind(this);
    this.removeAssessment = this.removeAssessment.bind(this);
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

removeAssessment(e) {
  const assessment = {
    name: e.target.title,
    id: e.target.id
  };

  this.props.removeAssessment(assessment)
}
// slideOut(){
//   this.setState({
//     slide: true
//   })
// }

  render() {
    const list = this.props.assessments.map((assessment, i) => {
      return <div key={i}>
                <AddAssessmentButton addAssessment={this.addAssessment} removeAssessment={this.removeAssessment}  assessment={assessment}/>
            </div>
    })
    const asslinks = this.props.links.map((testLink, i) => {
        return <div key={i}>
          { testLink.name }: <a href={`${testLink.link}`}> { testLink.link }</a>
        
        </div>
    })

    return (
      <div className="LinkDisplay">
        <span>
        { list }
        </span>
        <button className='generate-links-button' onClick={ this.generateLink }>GENERATE LINKS</button>
        { asslinks }
      </div>
        
      
    );
  }
}



export default connect(state => state, Actions)(LinkDisplay);