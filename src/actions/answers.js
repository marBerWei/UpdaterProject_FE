// updates the state
export function fetchedAnswers(payload) {
  return {
    type: 'FETCHED_ANSWERS',
    payload
  }
}


//fetches all the answers from the back end
export function fetchAnswers() {

  return function(dispatch) { 
    //dispatch(fetchingQuestions())
	  fetch("http://localhost:3001/answers", {
	      method: 'get',
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    })
	    .then(resp => resp.json())
	    .then(answersJSON => {
	    	dispatch(fetchedAnswers(answersJSON))
		})
	}
}

//creates a new answer


export function createAnswer( answerParams) {
  const body = JSON.stringify(answerParams)
  return function(dispatch){
    fetch("http://localhost:3001/answers", {
      method: 'post',
      body: body,
      headers: {
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedAnswers(json))
    })
  }
}

export function setFilteredAnswers(payload) {
  return {
    type: 'SET_FILTERED_ANSWERS',
    payload
  }
}

export function updateFilteredAnswers(payload){
  return { 
    type: "UPDATE_FILTERED_ANSWERS",
    payload
  }
}

