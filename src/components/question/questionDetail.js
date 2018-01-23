import React from 'react'
import { connect } from 'react-redux'
import AnswerContainer from '../answer/answerContainer'
import { setFilteredAnswers } from '../../actions/answers'
import { fetchAnswers } from '../../actions/answers'
import { fetchQuestions } from '../../actions/questions'
import AnswerForm from '../answer/answerForm'

class QuestionDetail extends React.Component {

	componentDidMount() {
    	this.props.fetchQuestions()
    	this.props.fetchAnswers()
  }

  handleFormUpdate(){
  	console.log(this.props)
  }
	
	render(){

	console.log('details page',this.props)

	return(
			<div >
				<h1>{this.props.currentQuestion.title} --- {this.props.currentQuestion.name} </h1>
				<AnswerContainer filteredAnswers={this.props.filteredAnswers}/>
				<AnswerForm handleFormUpdate={this.handleFormUpdate}/>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
  	questions: state.questions,
  	currentQuestion: state.currentQuestion,
    answers: state.answers,
    filteredAnswers: state.filteredAnswers,
  }
}


function mapDispatchToProps(dispatch){
  return {
    setFilteredAnswers: () => {
      dispatch(setFilteredAnswers())
    },
    fetchAnswers: (state) => {
      dispatch(fetchAnswers(state))
    },
    fetchQuestions:(string) => {
      dispatch(fetchQuestions(string))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)