import React from 'react'
import { Link } from 'react-router-dom'
import { changeToDate } from '../../services/questions'
import { fetchOneQuestion } from '../../actions/questions'
import { setCurrentSearch } from '../../actions/questions'
import {connect} from 'react-redux'

class QuestionItem extends React.Component {

	handleClick = () => {
		this.props.fetchOneQuestion(this.props.question.id)
		console.log('answers array:',this.props.currentQuestion.answers)
	}

	render(){
		const date = changeToDate(this.props.question.created_at)
		let myParams = this.props.question
		return(
			<div onClick={this.handleClick} className = "questionItem">
					<div className ="questionTextArea">
						<Link params={myParams} target="_blank" to={"localhost:3000/" + this.props.question.title.split(" ").join("")}>
						{this.props.question.title}
					
						</Link>
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

		  </div>
		)
	}
}

function mapStateToProps(state){
  return {
  	questions: state.questions,
    currentQuestion:state.currentQuestion
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchOneQuestion: (id) => {
      dispatch(fetchOneQuestion(id))
    },
    setCurrentSearch: (obj) => {
      dispatch(setCurrentSearch(obj))
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(QuestionItem);