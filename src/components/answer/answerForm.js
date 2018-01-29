import React from 'react'
import { createAnswer } from '../../actions/answers'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'


class AnswerForm extends React.Component {
	
  state = {question_id:'',
  				 name:'',
  		   	 answer_text:''}

  handleNameChange = (e) => {
  	this.setState({ 
      name: e.target.value
    })
	}

	handleTextChange = (e) => {
		this.setState({ answer_text: e.target.value,
      question_id: this.props.currentQuestion.question.id 
    })
	}

	handleSubmit = (e) => {
		let fields = Object.values(this.state)
		if(!!(fields.every(x => !!x))){
			this.props.createAnswer(this.state)
      this.setState({question_id:'',
           name:'',
           answer_text:''
        })
		} else {
			console.log('not ready to post')
		}
	}
  

  render() {
    console.log(this.state,this.props)
    return (
      <div className = "answerForm">
      <Form size={'massive'} key={'massive'} onSubmit = {this.handleSubmit}>
        <Form.Field control={TextArea} onChange={this.handleTextChange} placeholder="Got an answer?..." />
        <Form.Field onChange={this.handleNameChange} control={Input} placeholder='Name' />
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
  }
}


function mapDispatchToProps(dispatch){
  return {
    createAnswer: (answerParams) => {
      dispatch(createAnswer(answerParams))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm)