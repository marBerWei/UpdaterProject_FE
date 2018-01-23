import React from 'react'
import { connect } from 'react-redux'
import { setFilteredAnswers } from '../../actions/answers'
import AnswerList from './answerList'
import AnswerForm from '../answer/answerForm'

class AnswerContainer extends React.Component {

	render(){
		//console.log('props:',this.props)
		return(
			<div>
				<AnswerList answers={this.props.filteredAnswers}/>
			</div>
		)
	}
}

export default (AnswerContainer)