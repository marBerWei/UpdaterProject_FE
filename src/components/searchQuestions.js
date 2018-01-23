import React from 'react'
import QuestionForm from './question/questionForm'
import { Input} from 'semantic-ui-react'

const Search = (props) => {
	const handleSearch = (event) => {
 		props.onSearch(event)
 	}
  return (
  	<div className="searchContainer">
  		<h1>Updater FAQ</h1>
	  	<div className="searchBox">
		  	
		    <div className="input">
		    	<h1>Search For a Question</h1><br/>
		      <Input
		      	size="massive"
		        type="text"
		        placeholder="Search..."
		        onChange={handleSearch}
		      />
		    </div>
		    <div>
			    <h1>Ask a Question</h1>
			    <QuestionForm />
		    </div>
	    </div>
    </div>
  )
}

export default Search