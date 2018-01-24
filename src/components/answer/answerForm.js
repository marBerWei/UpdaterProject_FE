import React from 'react'
import { createAnswer } from '../../actions/answers'
import { updateFilteredAnswers } from '../../actions/answers'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'


class AnswerForm extends React.Component {
	
  state = {question_id:this.props.currentQuestion.id,
  				 name:'',
  		   	 answer_text:''}

  handleNameChange = (e) => {
  	this.setState({ name: e.target.value })
	}

	handleTextChange = (e) => {
		this.setState({ answer_text: e.target.value })
	}

	handleSubmit = (e) => {
		let fields = Object.values(this.state)
		if(!!(fields.every(x => !!x))){
			console.log('ready to post')
			this.props.createAnswer(this.state)
      this.props.updateFilteredAnswers(this.state)
		} else {
			console.log('not ready to post')
		}
    //this.props.updateAnswers(this.state)
	}
  

  render() {
    console.log(this.state,this.props)
    return (
      <div>
      <Form onSubmit = {this.handleSubmit}>
        <Form.Field control={TextArea} onChange={this.handleTextChange}label='Answer' placeholder="Got an answer?..." />
        <Form.Field onChange={this.handleNameChange} control={Input} label='name' placeholder='Name' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    answers: state.answers,
    filteredAnswers: state.filteredAnswers,
  }
}


function mapDispatchToProps(dispatch){
  return {
    createAnswer: (answerParams) => {
      dispatch(createAnswer(answerParams))
    },
    updateFilteredAnswers: (answerParams)=> {
      dispatch(updateFilteredAnswers(answerParams))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm)