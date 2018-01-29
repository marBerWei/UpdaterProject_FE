function rootReducer(state = { questions: [], currentQuestion:'', currentSearch:''}, action) {
  switch (action.type) {
    case 'FETCHED_QUESTIONS':
      return Object.assign({}, state, { questions: action.payload } )
    case 'FETCHED_ONE_QUESTION':
      return Object.assign({}, state, { currentQuestion: action.payload } )
    case "SAVE_QUESTION":
      return Object.assign({}, state, {questions: [...state.questions, action.payload]} )
    case 'SET_CURRENT_SEARCH':
      return Object.assign({}, state, { currentSearch: action.payload } )
    default:
      return state
  }
}


export default rootReducer