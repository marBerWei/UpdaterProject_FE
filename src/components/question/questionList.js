import React from 'react'
import QuestionItem from './questionItem'
import {ScrollArea} from 'react-scrollbar';

const QuestionList = (props) => {
	console.log('question list props=', props)
	const questions = props.questions.map(q => {
		return <QuestionItem question={q} key={q.id}/>
	})
	
	return(
	<div className = 'questionsList'>
		<ul>
	      {questions}
      	</ul>
    </div>
	)
}

export default QuestionList