import React, { Component } from 'react';
import axios from 'axios';
import EnterEmail from '../../components/EnterEmail/EnterEmail';


class AssessmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assessments: [],
      searchText: '',
      displayPopup: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  //check state.user.name if == null make email popup visible

  // gets all assessments from db and maps through them to create a list of assessments. 
  // When clicked it generates a link and makes the popup visible...
  // posts email and assessment id to server to get generated link

  //needs a search bar

  componentDidMount() {
    // if (!this.props.user.name) {
    //   show email popup
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

  render() {
    let assessments = this.state.assessments.map((assessment, i) => {
      // add plus buttons
      // select all function
      if (this.state.searchText === '') {
        return <div className='assessment-button'><button key={assessment.id}> {assessment.name}</button><br/></div>
      }
      else if (assessment.name.includes(this.state.searchText)) {
        return <div className='assessment-button'><button key={assessment.id}> {assessment.name}</button><br/></div>
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
          <div className='assessments-list' >
            {assessments}
          </div>
          <button>Generate Links</button>
        </div>
      )
  }
}

export default AssessmentList;