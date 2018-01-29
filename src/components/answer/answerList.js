import React from 'react'
import AnswerItem from './answerItem'
import Scroll from 'react-awesome-scroll';

const AnswerList = (props) => {

	const answers = props.answers.map(a => {
		return <AnswerItem answer={a} key={a.id}/>
	})
	
	return(
	<div className = 'answerList'>
		<div style={{ height: 500}} >
			<Scroll>
			  <ul>
			   {answers}
		    </ul>
	    </Scroll>
    </div>
  </div>
	)
}

export default AnswerList