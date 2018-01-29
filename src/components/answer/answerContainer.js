import React from 'react'
import { connect } from 'react-redux'
import { setFilteredAnswers } from '../../actions/answers'
import AnswerList from './answerList'
import AnswerForm from '../answer/answerForm'

class AnswerContainer extends React.Component {

	render(){
		 if(this.props.currentQuestion.answers.length > 0){
		 	return(
			 	<div>
				 	<div className="answerTitle">{this.props.currentQuestion.question.title}</div>
					<AnswerList answers={this.props.currentQuestion.answers}/>
				</div>
			)
		 } else {
		 		return(
			 	<div>
			 		<div className="answerTitle">{this.props.currentQuestion.question.title}</div>
				 	<div className="firstAnswerMessage">
				 		<img className="monkey_pic" src={require('./slothCartoon.jpg')}/>
				 		<div className="noAnswersMessage">Looks like this question hasn't been answered yet....Be the first!</div>
				 	</div>
				</div>
			)

		 }
		 
	}
}


export default AnswerContainer

// <AnswerList answers={this.props.filteredAnswers}/>