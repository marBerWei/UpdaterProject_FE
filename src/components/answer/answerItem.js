import React from 'react'
import {Icon} from 'semantic-ui-react'

class AnswerItem extends React.Component {

	handleClick = (e) => {
		console.log("clicked")
	}

	render(){
		let like = this.props.answer.like
		if(!(this.props.answer.like)){
			like = 0
		}
		return(
		<div className = "answerItem">
			<div className ="answerTextArea">
				<div className="answerText">
					{this.props.answer.answer_text}
				</div>
				<div className="answerName">
					- {this.props.answer.name}
				</div>
				<div className="answerLikes" onClick={this.handleClick}>
					 	<Icon name='heart' size='small'/> {like} likes
				</div>
				
			</div>
    </div>
		)
	}
}

export default AnswerItem;
