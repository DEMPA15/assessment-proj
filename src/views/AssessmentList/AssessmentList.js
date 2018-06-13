import React, { Component } from 'react';
import axios from 'axios';
import AddMinusButton from '../../components/AddMinusButton/AddMinusButton';
import AddAssessmentButton from '../../components/AddAssessmentButton/AddAssessmentButton';
import AddRemoveAll from '../../components/AddRemoveAll/AddRemoveAll';
import LoadingGif from '../../components/LoadingGif/LoadingGif'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAssessment, removeAssessment, removeAllAssessments } from '../../redux/action-creators';
import LinkDisplay from '../../components/LinkDisplay/LinkDisplay';


class AssessmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assessments: [],
      searchText: '',
      loading: true,
      visible: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAssessment = this.addAssessment.bind(this);
    this.removeAssessment = this.removeAssessment.bind(this);
    this.addAll = this.addAll.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.slideOut = this.slideOut.bind(this);
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
          assessments: res.data,
          loading: false
        })
      })
  }



  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addAssessment(e) {
    const name = e.target.title;
    const id = e.target.id;

    if (!this.props.assessments.find(propsAssessment => propsAssessment.id === id)) {
      const assessment = [{ name, id }];
      this.props.addAssessment(assessment);
    }
  }

  removeAssessment(e) {
    const assessment = {
      name: e.target.title,
      id: e.target.id
    };

    this.props.removeAssessment(assessment)
  }

  addAll(e) {
    const assessmentsToSend = this.state.assessments.map((assessment, i) => {
      if (!this.props.assessments.find(propsAssessment => propsAssessment.id === assessment.id)) {
        return assessment;
      }
    })
    this.props.addAssessment(assessmentsToSend);
  }

  removeAll(e) {
    this.props.removeAllAssessments();
  }

  slideOut(){
    if (this.state.visible === true){
    return this.setState({
      visible: false
    }) } else {
      return this.setState({
        visible: true
      })
    }
    
  }

  render() {
    let assessments = this.state.assessments.map((assessment, i) => {
      if (this.state.searchText === '') {
        return <AddAssessmentButton addAssessment={this.addAssessment} removeAssessment={this.removeAssessment}  assessment={assessment} key={i} />
      }
      else if (assessment.name.includes(this.state.searchText)) {
        return <AddAssessmentButton addAssessment={this.addAssessment} removeAssessment={this.removeAssessment}  assessment={assessment} key={i} />
      }
    })
    if (assessments.length === 0) {
      assessments = 'No results found.'
    }
    if (this.state.loading) {
      return <LoadingGif />
    }
    else return (
      <div className='assessments-page' >
        <h1>Assessments</h1>
        <div id='search-box' >
          <p>Search: </p>
          <input type="text" name='searchText' value={this.state.searchText} onChange={this.handleChange} />
        </div>
        <div className='add-remove-all' >
          <AddRemoveAll add ={true }addAll={this.addAll} allAssessments={this.state.assessments} />
          <AddRemoveAll removeAll={this.removeAll} allAssessments={this.state.assessments}/>
        </div>
        <div className='assessments-list' >
          {assessments}
        </div>
        <div className={`slide-up-container-${this.state.visible}`} ref={this.state.visible} >
          <button className="slide-up-button" onClick={ this.slideOut }>assessments list</button>
      { this.state.visible === true &&
         <LinkDisplay />}

        </div>
        
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAssessment, removeAssessment, removeAllAssessments }, dispatch)
}

export default connect(state => state, mapDispatchToProps)(AssessmentList);