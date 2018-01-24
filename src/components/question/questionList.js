import React from 'react'
import QuestionItem from './questionItem'

const QuestionList = (props) => {

	const questions = props.currentSearch.map(q => {
		return <QuestionItem question={q} key={q.id}/>
	})
	
	return(
	<div className = 'questionsList'>
		<div className="questionsTitle">Questions</div>
		<ul>
	      {questions}
      	</ul>
    </div>
	)
}

export default QuestionList