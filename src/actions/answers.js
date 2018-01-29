//fetches all the answers from the back end
// export function fetchAnswers() {

//   return function(dispatch) { 
//     //dispatch(fetchingQuestions())
// 	  fetch("http://localhost:3001/answers", {
// 	      method: 'get',
// 	      headers: {
// 	        "Content-Type":"application/json",
// 	        "Accept":"application/json"
// 	      }
// 	    })
// 	    .then(resp => resp.json())
// 	    .then(answersJSON => {
// 	    	dispatch(fetchedAnswers(answersJSON))
// 		})
// 	}
// }

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
      console.log(json)
      dispatch(fetchedOneQuestion(json))
      // update the store with the current question and answer
    })
  }
}

export function fetchedOneQuestion(payload) {
  return {
    type: 'FETCHED_ONE_QUESTION',
    payload
  }
}


export function updateAnswersForCurrentQuestion(payload){
  return { 
    type: "UPDATE_ANSWERS_FOR_CURRENT_QUESTION",
    payload
  }
}

