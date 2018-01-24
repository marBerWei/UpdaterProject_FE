import React from 'react'
import AnswerItem from './answerItem'

const AnswerList = (props) => {

	const answers = props.answers.map(a => {
		return <AnswerItem answer={a} key={a.id}/>
	})
	
	return(
	<div className = 'answerList'>
	  <ul>
	    {answers}
      </ul>
    </div>
	)
}

export default AnswerList