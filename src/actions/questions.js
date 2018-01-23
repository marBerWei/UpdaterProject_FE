export function fetchedQuestions(payload) {
  return {
    type: 'FETCHED_QUESTIONS',
    payload
  }
}

export function fetchQuestions() {

  return function(dispatch) { 
    //dispatch(fetchingQuestions())
	  fetch("http://localhost:3001/questions", {
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

// post to database



export function savingQuestion( questionParams) {
  console.log("inside savingQuestion")
  const body = JSON.stringify(questionParams)
  return function(dispatch){
    //console.log("inside the dispatch")
    fetch("http://localhost:3001/questions", {
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


// export function savingQuestion( questionParams, dispatch ) {
//   const body = JSON.stringify(questionParams)
// 	return fetch("http://localhost:3001/questions", {
//       method: 'post',
//       body: body,
//       headers: {
//         "Content-Type":"application/json",
//         "Accept":"application/json"
//       }
//     })
//       .then((res) => res.json())
//       .then((json) => {
//       console.log(json)  
//       dispatch(fetchedQuestions(json))
//         //dispatch(saveQuestion(json))
//     })  
// }

// export function saveQuestion(payload){
//   return { 
//     type: "SAVE_QUESTION",
//     payload
//   }
// }