import React from 'react'


class AnswerItem extends React.Component {

	render(){
		//console.log(this.props)
		return(
		<div className = "answerItem">
			<div className ="answerTextArea">
				<div className="answerText">
					{this.props.answer.answer_text}
				</div>
				<div className="answerName">
					-- {this.props.answer.name}
				</div>
				<div className="answerLikes">
					{this.props.answer.like}
				</div>
			</div>
    </div>
		)
	}
}

export default AnswerItem;
