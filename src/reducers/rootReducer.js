function rootReducer(state = { questions: [], answers:[], filteredAnswers:[], currentQuestion:0, currentSearch:''}, action) {
  switch (action.type) {
    case 'FETCHED_QUESTIONS':
      return Object.assign({}, state, { questions: action.payload } )
    case 'SET_CURRENT_QUESTION':
      return Object.assign({}, state, { currentQuestion: action.payload } )
    case "SAVE_QUESTION":
      return Object.assign({}, state, {questions: [...state.questions, action.payload]} )
    case 'FETCHED_ANSWERS':
      return Object.assign({}, state, { answers: action.payload } )
    case 'SET_FILTERED_ANSWERS':
      return Object.assign({}, state, { filteredAnswers: action.payload } )
    case 'UPDATE_FILTERED_ANSWERS':
      return Object.assign({}, state, { filteredAnswers:[...state.filteredAnswers, action.payload]} )
    case 'SET_CURRENT_SEARCH':
      return Object.assign({}, state, { currentSearch: action.payload } )
    default:
      return state
  }
}


export default rootReducer