import React from 'react'
import QuestionList from './questionList'
import Scroll from 'react-awesome-scroll';
class QuestionContainer extends React.Component {


	render(){
        console.log(this.props)
		return(
		<div style={{ height: 1000}}>
		<Scroll>
           <QuestionList questions={this.props.questions}/>
        </Scroll>
		</div>
		)
	}
}

export default QuestionContainer





  
