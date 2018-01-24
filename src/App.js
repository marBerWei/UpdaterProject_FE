import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAnswers } from './actions/answers'
import { fetchQuestions } from './actions/questions'
import { setCurrentSearch } from './actions/questions'
import Nav from './components/nav'
import { withRouter} from 'react-router'
import SearchQuestions from './components/searchQuestions'
import QuestionForm from './components/question/questionForm'
import QuestionContainer from './components/question/questionContainer'
import QuestionList from './components/question/questionList'
import './App.css';

class App extends Component {
  state = { 
            currentSearch:[]
          }

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchAnswers()
  }

  onSearch = (event) => {
    console.log("in the search", event.target.value)
    const searchInput = event.target.value.toLowerCase()
    const filteredQuestions = this.props.questions.filter(question => {
      console.log(question.title, searchInput)
      return question.title.toLowerCase().includes(searchInput)
    })
    console.log(filteredQuestions)
    if(filteredQuestions){
      this.props.setCurrentSearch(filteredQuestions)
    } else {
      this.props.setCurrentSearch(this.props.questions)
    }
    

  }

  render() {
    let currentSearch = {}
    if(!(this.props.currentSearch)){
      currentSearch = this.props.questions
    } else {
      currentSearch = this.props.currentSearch
    }
    return (

      <div className="App">
        <div className="appContainer">
        <Nav />
        <div className="someThing"><QuestionList questions={currentSearch} currentSearch={currentSearch} /></div>
        <div className="updaterTitle">Updater FAQ</div>
          <Route exact path="/" render={(props) => <SearchQuestions onSearch={this.onSearch} {...props} /> }/>
          <Route path="/" render={(props) => <QuestionContainer answers={this.props.answers} questions={currentSearch} currentSearch={this.props.currentSearch} {...props} /> }/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    questions:state.questions,
    answers: state.answers,
    currentSearch:state.currentSearch
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
    },
    setCurrentSearch: (obj) => {
      dispatch(setCurrentSearch(obj))
    },
  }
}


export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(App));
