export const REQUEST_VACATION = 'REQUEST_VACATION'
export const SET_VACATION_REQUEST = 'SET_VACATION_REQUEST'
export const LOADING = 'vacation/LOADING'
export const SET_SUCCESS = 'vacation/SET_SUCCESS'
export const SET_ERROR = 'vacation/SET_ERROR'

export const requestVacation = (payload) => ({type: REQUEST_VACATION, payload})
export const setVacationRequest = (payload) => ({type: SET_VACATION_REQUEST, payload})
export const loading = () => ({type: LOADING})
export const setSuccess = (payload) => ({type: SET_SUCCESS, payload})
export const setError = (payload) => ({type: SET_ERROR, payload})
