import React from 'react'
// import {createQuestion} from '../../services/questions'
import { connect } from 'react-redux'
import { savingQuestion } from '../../actions/questions'
import { fetchQuestions } from '../../actions/questions'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'


class QuestionForm extends React.Component {
	
  state = {name:'',
  				title:'',
          }

  handleNameChange = (e) => {
  	this.setState({ name: e.target.value })
	}

	handleTitleChange = (e) => {
		this.setState({ title: e.target.value })
	}

	handleSubmit = (e) => {
		let fields = Object.values(this.state)
		if(!!(fields.every(x => !!x))){
			console.log('ready to post')
			this.props.savingQuestion(this.state)
		} else {
			console.log('not ready to post')
		}
	}
  

  render() {
    
    return (
      <div className="questionFormContainer">
      <Form onSubmit = {this.handleSubmit}>
        <Form.Field control={TextArea} onChange={this.handleTitleChange}placeholder="What's on your mind?..." />
        <Form.Field onChange={this.handleNameChange} control={Input} placeholder='Name' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    questions:state.questions,
    answers: state.answers,
    currentSearch:state.currentSearch
  }
}
function mapDispatchToProps(dispatch){
  return {
    savingQuestion:(string) => {
      dispatch(savingQuestion(string))
    },
    fetchQuestions:() => {
      dispatch(fetchQuestions())
    }
  }
}

export default connect(null, mapDispatchToProps)(QuestionForm)