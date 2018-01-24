import React from 'react'
import { Link } from 'react-router-dom'
import { changeToDate } from '../../services/questions'
import { setCurrentQuestion } from '../../actions/questions'
import { setFilteredAnswers } from '../../actions/answers'
import { setCurrentSearch } from '../../actions/questions'
import {connect} from 'react-redux'

class QuestionItem extends React.Component {

	handleClick = () => {
		let filteredAnswers = this.props.answers.filter(a => a.question_id === this.props.currentQuestion.id)
		console.log('answers array:',this.props.answers, 'filtered:', filteredAnswers)
		this.props.setFilteredAnswers(filteredAnswers)
		this.props.setCurrentSearch(this.props.questions)
	}

	handleMouseover = (e) => {
		e.preventDefault()
		this.props.setCurrentQuestion(this.props.question)
	}

	render(){
		const date = changeToDate(this.props.question.created_at)
		//console.log("question item props:",this.props)

		
		
		return(
			<div onClick={this.handleClick} className = "questionItem">
				<Link  to={"/" + this.props.question.id} onMouseOver={this.handleMouseover} >
					<div className ="questionTextArea">
						<div className="questionText">
							{this.props.question.title}
						</div>
						<div className="askedBy">
							- {this.props.question.name}
						</div>
						<div className="createdAt">
							{date}
						</div>
						
					</div>
				</Link>
		  </div>
		)
	}
}

function mapStateToProps(state){
  return {
  	questions: state.questions,
    answers: state.answers,
    currentQuestion:state.currentQuestion
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentQuestion: (id) => {
      dispatch(setCurrentQuestion(id))
    },
    setFilteredAnswers: (id) => {
      dispatch(setFilteredAnswers(id))
    },
    setCurrentSearch: (obj) => {
      dispatch(setCurrentSearch(obj))
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(QuestionItem);