import { SET_VACATION_REQUEST, LOADING, SET_ERROR, SET_SUCCESS } from "./actions"

const initialState = {
    vacations: [
      {id: 1, startDate: '03.09.2020', returnDate: '04.09.2020', status: 'Resolved', daysNumber: '1', description: ''},
    ],
    loading: false,
    success: null,
    error: null
}

const vacationReducer = (state=initialState, action) => {
  switch(action.type){
    case SET_VACATION_REQUEST:
      return{
        ...state,
        vacations: [...state.vacations, action.payload]
      }
    case LOADING:
      return{
        ...state,
        loading: !state.loading
      }
    case SET_SUCCESS:
      return{
        ...state,
        success: action.payload
      }
    case SET_ERROR:
      return{
        ...state,
        error: action.payload
      }
      default: return state
  }
}

export default vacationReducer
