export function fetchedQuestions(payload) {
  return {
    type: 'FETCHED_QUESTIONS',
    payload
  }
}

export function fetchQuestions() {

  return function(dispatch) { 
    //dispatch(fetchingQuestions())
	  fetch("https://updaterfaqbe.herokuapp.com/questions", {
	      method: 'get',
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    })
	    .then(resp => resp.json())
	    .then(questionsJSON => {
	    	dispatch(fetchedQuestions(questionsJSON))
		})
	}
}

// don't need to fetch to the database for this
export function setCurrentQuestion(payload) {
  return {
    type: 'SET_CURRENT_QUESTION',
    payload
  }
}

export function setCurrentSearch(payload) {
  return {
    type: 'SET_CURRENT_SEARCH',
    payload
  }
}

// post to database



export function savingQuestion( questionParams) {
  console.log("inside savingQuestion")
  const body = JSON.stringify(questionParams)
  return function(dispatch){
    //console.log("inside the dispatch")
    fetch("http://updaterfaqbe.herokuapp.com/questions", {
      method: 'post',
      body: body,
      headers: {
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedQuestions(json))
    })
  }
}