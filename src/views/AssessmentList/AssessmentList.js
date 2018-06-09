import React, { Component } from 'react';
import axios from 'axios';
import EnterEmail from '../../components/EnterEmail/EnterEmail';
import AddMinusButton from '../../components/AddMinusButton/AddMinusButton';
import AddAssessmentButton from '../../components/AddAssessmentButton/AddAssessmentButton';
import AddAllAssessments from '../../components/AddAllAssessments/AddAllAssessments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAssessment } from '../../redux/action-creators';
import LinkDisplay from '../../components/LinkDisplay/LinkDisplay';


class AssessmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assessments: [],
      searchText: '',
      displayPopup: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAssessment = this.addAssessment.bind(this);
    this.addAll = this.addAll.bind(this);
  }
  //check state.user.name if == null make email popup visible

  // gets all assessments from db and maps through them to create a list of assessments. 
  // When clicked it generates a link and makes the popup visible...
  // posts email and assessment id to server to get generated link

  //needs a search bar

  componentDidMount() {
    // if (!this.props.user.email) {
    //   this.props.history.push('/email');
    // }
    axios.get(`/api/assessments`)
      .then((res) => {
        this.setState({
          assessments: res.data
        })
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addAssessment(e){
    const name = e.target.title;
    const id = e.target.id;

    if (!this.props.assessments.find(propsAssessment => propsAssessment.id === id)) {
      const assessment = [{ name, id }];
      return this.props.addAssessment(assessment);
    }
  }

  addAll(e) {
    const assessmentsToSend = this.state.assessments.map((assessment, i) => {
      if (!this.props.assessments.find(propsAssessment => propsAssessment.id === assessment.id)) {
        return assessment;
      }
    })
    this.props.addAssessment(assessmentsToSend);
  }
      // select all function

  render() {
    let assessments = this.state.assessments.map((assessment, i) => {
      if (this.state.searchText === '') {
        return <AddAssessmentButton addAssessment={this.addAssessment} assessment={assessment} key={i} />
      }
      else if (assessment.name.includes(this.state.searchText)) {
        return <AddAssessmentButton addAssessment={this.addAssessment} assessment={assessment} key={i} />
      }
    })
    if (assessments.length === 0) {
      assessments = 'No results found.'
    }

      return (
        <div className='assessments-page' >
          <h1>Assessments</h1>
          <div id='search-box' >
            <p>Search: </p>
            <input type="text" name='searchText' value={this.state.searchText} onChange={this.handleChange} />
          </div>
          <AddAllAssessments addAll={this.addAll} allAssessments={this.state.assessments} />
          <div className='assessments-list' >
            {assessments}
          </div>
          <LinkDisplay />
        </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addAssessment }, dispatch)
}

export default connect(state => state, mapDispatchToProps)(AssessmentList);