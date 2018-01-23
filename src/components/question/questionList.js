import React from 'react'
import QuestionItem from './questionItem'

const QuestionList = (props) => {

	const questions = props.questions.map(q => {
		return <QuestionItem question={q} key={q.id}/>
	})
	
	return(
		<div className = 'questionsList'>
		<h1>Questions</h1>
		<ul>
	      {questions}
      	</ul>
    </div>
	)
}

export default QuestionList