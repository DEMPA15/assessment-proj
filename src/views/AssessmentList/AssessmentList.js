import React, { Component } from 'react';
import axios from 'axios';


class AssessmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assessments: [],
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  //check state.user.name if == null make email popup visible

  // gets all assessments from db and maps through them to create a list of assessments. 
  // When clicked it generates a link and makes the popup visible...
  // posts email and assessment id to server to get generated link

  //needs a search bar

  componentDidMount() {
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
    const assessments = this.state.assessments.map((assessment, i) => {
      if (this.state.searchText === '') {
        return <li key={assessment.id}> {assessment.name} </li>
      }
      else if (assessment.name.includes(this.state.searchText)) {
        return <li key={assessment.id}> {assessment.name} </li>
      }
    })
    if (assessments.length >= 1) {
      return (
        <div>
          <h1>Assessments</h1>
          <p>Search: </p>
          <input type="text" name='searchText' value={this.state.searchText} onChange={this.handleChange} />
          {assessments}
        </div>
      )
    }
    else return (
      <div>
        <h1>Assessments</h1>
        <p>Search: </p>
        <input type="text" name='searchText' value={this.state.searchText} onChange={this.handleChange} />
        <p>No results found.</p>
      </div>
    )
  }
}

export default AssessmentList;