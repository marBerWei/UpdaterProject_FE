import React from 'react'
import {fetchedOneQuestion} from '../actions/questions'
import { Input} from 'semantic-ui-react'
import { connect } from 'react-redux'

const Search = (props) => {
	const handleSearch = (event) => {
 		props.onSearch(event)
 	}

  const clearCurrentSearch = () => {
  		props.fetchedOneQuestion('')
  }

  return (
    <div className="searchPadding">
  	<div className="searchContainer">
  		
	  	<div className="searchBox">
		  	
		      <Input
		      	size="massive"
		        type="text"
            icon='search' 
		        placeholder="Search previously asked questions..."
		        onChange={handleSearch}
		        onClick={clearCurrentSearch}
		      />
		   
		    
	    </div>
    </div>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    // fetchAnswers: (state) => {
    //   dispatch(fetchAnswers(state))
    // },
    // fetchQuestions:(string) => {
    //   dispatch(fetchQuestions(string))
    // },
    fetchedOneQuestion: (arg) => {
      dispatch(fetchedOneQuestion(arg))
    },
  }
}

export default connect(null, mapDispatchToProps)(Search)