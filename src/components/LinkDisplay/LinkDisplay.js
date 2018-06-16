import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action-creators';
import AddAssessmentButton from '../AddAssessmentButton/AddAssessmentButton';


class LinkDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    
    this.removeAssessment = this.removeAssessment.bind(this);
  }

// displays link from assessment list

removeAssessment(e) {
  const assessment = {
    name: e.target.title,
    id: e.target.id
  };

  this.props.removeAssessment(assessment)
}

  render() {
    const list = this.props.assessments.map((assessment, i) => {
      return <div key={i}>
                <AddAssessmentButton addAssessment={this.addAssessment} removeAssessment={this.removeAssessment}  assessment={assessment} link={true} />
            </div>
    })
    return (
      <div className="LinkDisplay">
        <span>
        { list }
        </span>
      </div>
        
      
    );
  }
}



export default connect(state => state, Actions)(LinkDisplay);