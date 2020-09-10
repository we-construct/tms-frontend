import { LOADING, SET_ERROR, SET_SUCCESS, SET_VACATIONS, SET_TOTAL_PAGES_COUNT, SET_PAGE } from "./actions"

const initialState = {
    vacations: [],
    loading: false,
    success: null,
    error: null,
    totalPages: 0,
    page: 1
}

const vacationReducer = (state=initialState, action) => {
  switch(action.type){
    case SET_VACATIONS:
      return{
        ...state,
        vacations: action.payload
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
    case SET_TOTAL_PAGES_COUNT:
      return{
        ...state,
        totalPages: action.count
      }
    case SET_PAGE:
      return{
        ...state,
        page: action.page
      }
      default: return state
  }
}

export default vacationReducer
