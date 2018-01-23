import React from 'react'


class AnswerItem extends React.Component {

	render(){
		//console.log(this.props)
		return(
		<div className = "answerItem">
			<div className ="questionTextArea">
				<div className="questionText">
					{this.props.answer.answer_text}
				</div>
				<div className="askedBy">
					-- {this.props.answer.name}
				</div>
				<div className="createdAt">
					{this.props.answer.like}
				</div>
			</div>
    </div>
		)
	}
}

export default AnswerItem;
