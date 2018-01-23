import React from 'react'
import { Route } from 'react-router-dom'
import QuestionList from './questionList'
import QuestionDetail from './questionDetail'

class QuestionContainer extends React.Component {


	render(){

    
		return(
			<div className="questionsContainer">

				<Route exact path="/" render={(props) => <QuestionList questions={this.props.questions} {...props} />}/>
  			<Route path="/:id" render={(routeProps) => {
    			const id = parseInt(routeProps.location.pathname.slice(11))
    			// console.log(this.props.questions)
    			const question = this.props.questions.filter((question) => {
      	 		return question.id === id
    			 })
    		return <QuestionDetail question = {question[0]} {...routeProps}/>
    		}} />
			</div>
		)
	}
}

export default QuestionContainer





  
