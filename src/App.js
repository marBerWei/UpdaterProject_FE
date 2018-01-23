import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAnswers } from './actions/answers'
import { fetchQuestions } from './actions/questions'
import Nav from './components/nav'
import { withRouter} from 'react-router'
import SearchQuestions from './components/searchQuestions'
import QuestionForm from './components/question/questionForm'
import QuestionContainer from './components/question/questionContainer'
import './App.css';

class App extends Component {
  state = { questions:[],
            answers: [],
            currentSearch:[]
          }

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchAnswers()
  }

  onSearch = (event) => {
    const searchInput = event.target.value.toLowerCase()
    const filteredQuestions = this.state.questions.filter(question => {
      return question.title.toLowerCase().includes(searchInput)
    })
    if (searchInput){
      this.setState({
       currentSearch: filteredQuestions
      })
    } else {
      this.setState({
       currentSearch: this.state.questions
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={(props) => <SearchQuestions onSearch={this.onSearch} {...props} /> }/>
        <Route path="/" render={(props) => <QuestionContainer answers={this.props.answers} questions={this.props.questions} currentSearch={this.props.currentSearch} {...props} /> }/>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    questions:state.questions,
    answers: state.answers
    //currentSearch:state.currentSearch
  }
}
function mapDispatchToProps(dispatch){
  return {
    fetchAnswers: (state) => {
      dispatch(fetchAnswers(state))
    },
    fetchQuestions:(string) => {
      dispatch(fetchQuestions(string))
    }
  }
}


export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(App));
