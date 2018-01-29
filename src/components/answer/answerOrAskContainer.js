import React from 'react'
import { connect } from 'react-redux'
//import { setFilteredAnswers } from '../../actions/answers'
import AnswerContainer from './answerContainer'
import QuestionForm from '../question/questionForm'
import AnswerForm from '../answer/answerForm'

class AnswerOrAskContainer extends React.Component {

	render(){
		//console.log('props:',this.props)
		if(this.props.currentQuestion){ //change this condition to something about a question being clicked
		 return(
			<div className = "answerContainer">
				<AnswerContainer currentQuestion={this.props.currentQuestion}/>
				<AnswerForm/>
			</div>)
		} else {
			return(
			<div className="askAQuestionContainer">
				<div className="questionAnswerTitle">Go ahead, ask a question!</div>
				<QuestionForm/>
			</div>)
		}
	}
}

function mapStateToProps(state){
  return {
    //answers: state.answers,
    currentQuestion: state.currentQuestion
  }
}

export default connect(mapStateToProps)(AnswerOrAskContainer)